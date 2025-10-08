import { StyleSheet } from 'react-native';
import { Typography } from '../../constants/Typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  sectionHeader: {
    ...Typography.h3,
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    ...Typography.body,
    fontSize: 14,
    color: '#111827',
    marginBottom: 2,
  },
  settingSubtitle: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    ...Typography.h3,
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  profileEmail: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  profilePhone: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
  },
  changeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 6,
  },
  changeButtonText: {
    ...Typography.button,
    fontSize: 12,
    color: '#374151',
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  planInfo: {
    flex: 1,
  },
  planTitle: {
    ...Typography.h3,
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  planSubtitle: {
    ...Typography.body,
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  planBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
  },
  planBadgeText: {
    ...Typography.body,
    fontSize: 10,
    color: '#D97706',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    width: '85%',
  },
  modalTitle: {
    ...Typography.h2,
    fontSize: 18,
    color: '#111827',
    marginBottom: 12,
  },
  modalMessage: {
    ...Typography.body,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: '#F3F4F6',
  },
  confirmButton: {
    backgroundColor: '#EF4444',
  },
  modalButtonText: {
    ...Typography.button,
    fontSize: 14,
  },
  cancelButtonText: {
    color: '#374151',
  },
  confirmButtonText: {
    color: '#FFFFFF',
  },
});
