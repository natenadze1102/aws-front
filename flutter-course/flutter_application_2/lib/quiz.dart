import 'package:flutter/material.dart';
import 'package:flutter_application_2/questions_screen.dart';
import 'package:flutter_application_2/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<StatefulWidget> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  bool showQuestions = false;

  void switchScreen() {
    setState(() {
      showQuestions = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget activeScreen = showQuestions == false
        ? StartScreen(onPressed: switchScreen)
        : const QuestionsScreen();

    return MaterialApp(
      home: Scaffold(body: activeScreen),
      debugShowCheckedModeBanner: false,
    );
  }
}
