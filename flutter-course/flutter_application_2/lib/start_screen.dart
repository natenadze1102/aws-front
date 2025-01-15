import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  final Function() onPressed;

  const StartScreen({
    super.key,
    required this.onPressed,
  });

  @override
  Widget build(
    BuildContext context,
  ) {
    return (Container(
      decoration: const BoxDecoration(
          gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Colors.blue, Colors.amberAccent])),
      alignment: Alignment.center,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 300,
            color: Colors.white.withOpacity(0.85),
          ),
          Column(
            children: [
              const SizedBox(height: 80),
              const Text(
                'Learn flutter the fun way!',
                style: TextStyle(color: Colors.white, fontSize: 24),
              ),
              const SizedBox(height: 32),
              ScreenSwitcher(onPressed)
            ],
          )
        ],
      ),
    ));
  }
}

class ScreenSwitcher extends StatelessWidget {
  const ScreenSwitcher(void Function() this.onPressed, {super.key});

  final Function() onPressed;

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      icon: const Icon(Icons.arrow_right_alt),
      style: OutlinedButton.styleFrom(
          padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 0),
          side: const BorderSide(color: Colors.white),
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
          foregroundColor: Colors.white),
      onPressed: onPressed,
      label: const Text(
        'Start Quiz',
        style: TextStyle(fontSize: 18),
      ),
    );
  }
}
