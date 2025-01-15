import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(
    const TestApp(),
  );
}

class TestApp extends StatelessWidget {
  const TestApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        // scaffoldBackgroundColor: Colors.green,
        colorSchemeSeed: const Color(0xff6750a4),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int diceValue = 1;

  void rollDice() {
    setState(() {
      diceValue = Random().nextInt(6) + 1; // Generates a number between 1 and 6
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Roll Dice App'),
      ),
      body: Container(
        alignment: Alignment.center,
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.amber, Colors.blue],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
                padding: const EdgeInsets.symmetric(vertical: 16),
                child: ElevatedButton.icon(
                  onPressed: rollDice,
                  icon: const Icon(
                    Icons.rotate_right_sharp,
                  ),
                  label: const Text(
                    'Roll the dice',
                  ),
                  style: TextButton.styleFrom(
                    iconColor: Colors.white,
                    textStyle: const TextStyle(fontSize: 24),
                    backgroundColor: Colors.brown,
                    foregroundColor: Colors.white,
                    alignment: Alignment.center,
                    padding: const EdgeInsets.all(16),
                  ),
                )),
            Image(
              image: AssetImage('images/dice-$diceValue.png'),
              width: 140,
            ),
            Text(
              'Dice Value : $diceValue',
              style: const TextStyle(
                fontSize: 24,
                color: Colors.white,
              ),
            )
          ],
        ),
      ),
    );
  }
}

class CustomContainer extends StatelessWidget {
  const CustomContainer({super.key});

  @override
  Widget build(BuildContext context) {
    
  }
}
