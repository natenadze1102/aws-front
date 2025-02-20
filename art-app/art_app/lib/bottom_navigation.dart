import 'package:flutter/material.dart';

const homeText = 'Home';
const homeIcon = Icon(Icons.home_outlined);

class CustomBottomNavigationBar extends StatelessWidget {
  const CustomBottomNavigationBar({super.key});

  @override
  Widget build(BuildContext context) {
    return (NavigationBar(
      indicatorColor: Colors.amber,
      destinations: const <Widget>[
        NavigationDestination(
          selectedIcon: Icon(Icons.home),
          icon: homeIcon,
          label: homeText,
        ),
        NavigationDestination(
          icon: Badge(child: Icon(Icons.notifications_sharp)),
          label: 'Notifications',
        ),
        NavigationDestination(
          icon: Badge(
            label: Text('2'),
            child: Icon(Icons.messenger_sharp),
          ),
          label: 'Messages',
        ),
        NavigationDestination(
          selectedIcon: Icon(Icons.search_outlined),
          icon: Icon(Icons.search),
          label: 'Search',
        ),
      ],
    ));
  }
}
