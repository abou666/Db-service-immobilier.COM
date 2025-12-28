import 'package:flutter/material.dart';
import 'map.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Connexion SIG – Db Services Immobiliers")),
      body: Center(
        child: ElevatedButton(
          child: const Text("Se connecter"),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (_) => MapPage()),
            );
          },
        ),
      ),
    );
  }
}
