import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, FlatList, Image, TextInput } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import CommonHeader from '../../components/CommonHeader';
import { useAllReviewsScreen } from './AllReviews.hooks';
import styles from './AllReviewsStyles';

export default function AllReviewsScreen({ onBack }) {
  const {
    expandedReview,
    isFilterVisible,
    setIsFilterVisible,
    selectedFilter,
    isReplyModalVisible,
    setIsReplyModalVisible,
    replyText,
    setReplyText,
    handleAlertsPress,
    getBorderColor,
    getFilteredReviews,
    handleFilterSelect,
    handleReviewPress,
    handleReplyPress,
    handleViewReplyPress,
    handleSendReply,
    renderStars,
    STAR_FILTERS,
  } = useAllReviewsScreen();

  const renderMovieReview = ({ item }) => {
    const isExpanded = expandedReview === item.id;
    const stars = renderStars(item.rating);
    
    return (
      <TouchableOpacity 
        style={[styles.reviewCard, { borderColor: getBorderColor(item.rating) }]}
        onPress={() => handleReviewPress(item.id)}
        activeOpacity={0.7}
      >
        <View style={styles.reviewHeader}>
          <Image source={{ uri: item.poster }} style={styles.moviePoster} />
          <View style={styles.reviewInfo}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <View style={styles.movieMeta}>
              <Text style={styles.msid}>MSID: {item.msid}</Text>
              <Text style={styles.classification}>{item.classification}</Text>
            </View>
            <View style={styles.starsRow}>
              {stars.map((iconName, index) => (
                <Ionicons
                  key={index}
                  name={iconName}
                  size={16}
                  color={iconName === 'star' ? '#F59E0B' : '#D1D5DB'}
                />
              ))}
            </View>
            <Text style={styles.timeAgo}>{item.timeAgo}</Text>
          </View>
        </View>
        
        <Text 
          style={styles.reviewText} 
          numberOfLines={isExpanded ? undefined : 2}
        >
          {item.reviewText}
        </Text>

        {isExpanded && (
          <>
            <View style={styles.reviewActions}>
              {item.hasReply ? (
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleViewReplyPress(item.id)}
                >
                  <Ionicons name="eye-outline" size={16} color="#2563EB" />
                  <Text style={styles.actionButtonText}>View Reply</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => handleReplyPress(item.id)}
                >
                  <Ionicons name="chatbubble-outline" size={16} color="#2563EB" />
                  <Text style={styles.actionButtonText}>Reply</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={16} color="#2563EB" />
                <Text style={styles.actionButtonText}>Share</Text>
              </TouchableOpacity>
            </View>
            
            {item.hasReply && item.replyText && (
              <View style={styles.replySection}>
                <Text style={styles.replyLabel}>Your Reply:</Text>
                <Text style={styles.replyText}>{item.replyText}</Text>
              </View>
            )}
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Reviews</Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setIsFilterVisible(true)}
        >
          <Text style={styles.filterButtonText}>
            {STAR_FILTERS.find(f => f.value === selectedFilter)?.label}
          </Text>
          <Ionicons name="chevron-down" size={16} color="#374151" />
        </TouchableOpacity>
      </View>

      <CommonHeader
        onAlertsPress={handleAlertsPress}
        alertsCount={3}
      />

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={getFilteredReviews()}
          renderItem={renderMovieReview}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </ScrollView>

      <Modal
        visible={isFilterVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsFilterVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.filterModal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Reviews</Text>
              <TouchableOpacity onPress={() => setIsFilterVisible(false)}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            {STAR_FILTERS.map((filter) => (
              <TouchableOpacity
                key={filter.value}
                style={[
                  styles.filterOption,
                  selectedFilter === filter.value && styles.selectedFilterOption
                ]}
                onPress={() => handleFilterSelect(filter.value)}
              >
                <Text style={[
                  styles.filterOptionText,
                  selectedFilter === filter.value && styles.selectedFilterOptionText
                ]}>
                  {filter.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal
        visible={isReplyModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsReplyModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.replyModalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Reply to Review</Text>
              <TouchableOpacity onPress={() => setIsReplyModalVisible(false)}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.replyInput}
              placeholder="Type your reply here..."
              value={replyText}
              onChangeText={setReplyText}
              multiline
              numberOfLines={6}
            />
            <View style={styles.replyActions}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => setIsReplyModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.sendButton}
                onPress={handleSendReply}
              >
                <Text style={styles.sendButtonText}>Send Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
