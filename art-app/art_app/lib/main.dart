import 'package:art_app/bottom_navigation.dart';
import 'package:art_app/dice.dart';
import 'package:art_app/gradient_colors.dart';
import 'package:art_app/header_text.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  void clickHandler() {
    debugPrint('Hello from clickHandler!');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const HeaderText('Soso!!!'),
          ),
          body: const Stack(
            alignment: Alignment.center,
            children: [
              GradientColorss([
                Color(0xff1f005c),
                Color(0xff5b0060),
                Color(0xff870160),
                Color(0xffac255e),
                Color(0xffca485c),
                Color(0xffe16b5c),
                Color(0xfff39060),
                Color(0xffffb56b),
              ]),
              Dice()
            ],
          ),
          bottomNavigationBar: const CustomBottomNavigationBar()),
      theme: ThemeData(useMaterial3: true),
      debugShowCheckedModeBanner: false,
    );
  }
}
