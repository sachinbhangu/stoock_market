import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import { useAuth } from './AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          // If the user is authenticated, allow access to the dashboard
          <Stack.Screen name="Dashboard" component={DashboardPage} />
        ) : (
          // If not authenticated, redirect to the login screen
          <Stack.Screen name="Login" component={LoginPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProtectedRoute;