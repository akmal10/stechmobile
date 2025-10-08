import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Modal } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CommonHeader from '../../components/CommonHeader';
import { useSettingsScreen } from './Settings.hooks';
import styles from './SettingsStyles';

export default function SettingsScreen() {
  const {
    selectedLocation,
    showLogoutModal,
    setShowLogoutModal,
    showLocationModal,
    setShowLocationModal,
    notifications,
    handleAlertsPress,
    handleLogout,
    confirmLogout,
    handleNotificationToggle,
    handleWhatsAppSupport,
    handleHelpCenter,
    handleUpgradePlan,
    handleViewInvoices,
  } = useSettingsScreen();

  const renderSectionHeader = (title) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const renderSettingRow = (icon, title, subtitle, onPress, rightComponent) => (
    <TouchableOpacity style={styles.settingRow} onPress={onPress} disabled={!onPress}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={24} color="#2563EB" style={styles.settingIcon} />
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightComponent || (onPress && <Ionicons name="chevron-forward" size={20} color="#666" />)}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CommonHeader
        onAlertsPress={handleAlertsPress}
        alertsCount={3}
      />
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {renderSectionHeader('Account')}
        <View style={styles.section}>
          <View style={styles.profileCard}>
            <View style={styles.profilePhoto}>
              <Ionicons name="person" size={40} color="#2563EB" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileEmail}>john.doe@example.com</Text>
              <Text style={styles.profilePhone}>+1 (555) 123-4567</Text>
            </View>
          </View>
          {renderSettingRow('log-out', 'Logout', undefined, handleLogout)}
        </View>

        {renderSectionHeader('Location')}
        <View style={styles.section}>
          {renderSettingRow('location', 'Current Location', selectedLocation, () => setShowLocationModal(true), 
            <TouchableOpacity style={styles.changeButton} onPress={() => setShowLocationModal(true)}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          )}
        </View>

        {renderSectionHeader('Plan & Billing')}
        <View style={styles.section}>
          <View style={styles.planCard}>
            <View style={styles.planInfo}>
              <Text style={styles.planTitle}>Pro Plan</Text>
              <Text style={styles.planSubtitle}>14 days left in trial</Text>
              <Text style={styles.planSubtitle}>Next charge: Aug 28, 2025</Text>
            </View>
            <View style={styles.planBadge}>
              <Text style={styles.planBadgeText}>TRIAL</Text>
            </View>
          </View>
          {renderSettingRow('card', 'Upgrade/Manage Plan', undefined, handleUpgradePlan)}
          {renderSettingRow('receipt', 'View Invoices', undefined, handleViewInvoices)}
        </View>

        {renderSectionHeader('Notifications')}
        <View style={styles.section}>
          {renderSettingRow('star', 'New Review', 'Get notified when you receive a new review', undefined,
            <Switch
              value={notifications.newReview}
              onValueChange={() => handleNotificationToggle('newReview')}
              trackColor={{ false: '#E5E7EB', true: '#2563EB' }}
              thumbColor="#fff"
            />
          )}
          {renderSettingRow('warning', 'Low-Rating Review', 'Alert for reviews below 3 stars', undefined,
            <Switch
              value={notifications.lowRating}
              onValueChange={() => handleNotificationToggle('lowRating')}
              trackColor={{ false: '#E5E7EB', true: '#2563EB' }}
              thumbColor="#fff"
            />
          )}
          {renderSettingRow('trending-down', 'Rank Drop', 'Notify when your ranking drops', undefined,
            <Switch
              value={notifications.rankDrop}
              onValueChange={() => handleNotificationToggle('rankDrop')}
              trackColor={{ false: '#E5E7EB', true: '#2563EB' }}
              thumbColor="#fff"
            />
          )}
          {renderSettingRow('card', 'Billing Issue', 'Alert for payment problems', undefined,
            <Switch
              value={notifications.billing}
              onValueChange={() => handleNotificationToggle('billing')}
              trackColor={{ false: '#E5E7EB', true: '#2563EB' }}
              thumbColor="#fff"
            />
          )}
        </View>

        {renderSectionHeader('Support')}
        <View style={styles.section}>
          {renderSettingRow('logo-whatsapp', 'WhatsApp Support', undefined, handleWhatsAppSupport)}
          {renderSettingRow('help-circle', 'Help Center', undefined, handleHelpCenter)}
        </View>
      </ScrollView>

      <Modal
        visible={showLogoutModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={[styles.modalButtonText, styles.cancelButtonText]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmLogout}
              >
                <Text style={[styles.modalButtonText, styles.confirmButtonText]}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={showLocationModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Change Location</Text>
            <Text style={styles.modalMessage}>
              Location can be changed from the header dropdown.
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowLocationModal(false)}
              >
                <Text style={[styles.modalButtonText, styles.cancelButtonText]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
