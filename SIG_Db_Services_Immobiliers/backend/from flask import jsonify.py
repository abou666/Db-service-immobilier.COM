from flask import jsonify
import psycopg2

@app.route("/api/terrains", methods=["GET"])
def terrains():
    conn = psycopg2.connect(
        dbname="SIG_DB",
        user="USER",
        password="PASSWORD",
        host="HOST",
        port="PORT"
    )
    cur = conn.cursor()

    cur.execute("""
        SELECT jsonb_build_object(
            'type', 'FeatureCollection',
            'features', jsonb_agg(
                jsonb_build_object(
                    'type', 'Feature',
                    'geometry', ST_AsGeoJSON(geom)::jsonb,
                    'properties', jsonb_build_object(
                        'id', id,
                        'nom', nom
                    )
                )
            )
        )
        FROM terrains;
    """)

    data = cur.fetchone()[0]
    cur.close()
    conn.close()

    return jsonify(data)
