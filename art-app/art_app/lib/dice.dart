import 'dart:math';
import 'package:flutter/material.dart';

final randomozer = Random();

class Dice extends StatefulWidget {
  const Dice({super.key});

  @override
  State<StatefulWidget> createState() {
    return _DiceState();
  }
}

class _DiceState extends State<Dice> {
  int number = 1;

  void changeDiceNumber() {
    setState(() {
      number = randomozer.nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(mainAxisAlignment: MainAxisAlignment.center, children: [
      Image.asset(
        'assets/images/dice-$number.png',
        width: 200,
      ),
      Container(
        margin: const EdgeInsets.only(top: 16),
        child: TextButton(
          onPressed: changeDiceNumber,
          style: const ButtonStyle(
            padding: WidgetStatePropertyAll<EdgeInsetsGeometry>(
                EdgeInsets.symmetric(horizontal: 8, vertical: 0)),
            backgroundColor: WidgetStatePropertyAll<Color>(Colors.white),
            foregroundColor: WidgetStatePropertyAll<Color>(Colors.red),
          ),
          child: const Text('Roll the dice'),
        ),
      )
    ]);
  }
}
