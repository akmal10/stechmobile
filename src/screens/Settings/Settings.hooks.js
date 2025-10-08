import { useState } from 'react';
import { Alert, Linking } from 'react-native';
import { useLocation } from '../../contexts/LocationContext';

export const useSettingsScreen = () => {
  const { selectedLocation } = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [notifications, setNotifications] = useState({
    newReview: true,
    lowRating: true,
    rankDrop: false,
    billing: true,
  });

  const handleAlertsPress = () => {
    console.log('Alerts pressed');
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    Alert.alert('Logged Out', 'You have been successfully logged out.');
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    Alert.alert('Saved', 'Notification preferences updated.');
  };

  const handleWhatsAppSupport = () => {
    Linking.openURL('https://wa.me/1234567890');
  };

  const handleHelpCenter = () => {
    Linking.openURL('https://help.example.com');
  };

  const handleUpgradePlan = () => {
    Linking.openURL('https://billing.example.com/upgrade');
  };

  const handleViewInvoices = () => {
    Linking.openURL('https://billing.example.com/invoices');
  };

  return {
    selectedLocation,
    showLogoutModal,
    setShowLogoutModal,
    showLocationModal,
    setShowLocationModal,
    notifications,
    setNotifications,
    handleAlertsPress,
    handleLogout,
    confirmLogout,
    handleNotificationToggle,
    handleWhatsAppSupport,
    handleHelpCenter,
    handleUpgradePlan,
    handleViewInvoices,
  };
};
