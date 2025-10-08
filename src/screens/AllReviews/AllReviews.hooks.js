import { useState } from 'react';

const STAR_FILTERS = [
  { label: 'All Stars', value: 0 },
  { label: '5 Stars', value: 5 },
  { label: '4 Stars', value: 4 },
  { label: '3 Stars', value: 3 },
  { label: '2 Stars', value: 2 },
  { label: '1 Star', value: 1 },
];

export const useAllReviewsScreen = () => {
  const [expandedReview, setExpandedReview] = useState(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isReplyModalVisible, setIsReplyModalVisible] = useState(false);
  const [selectedReviewForReply, setSelectedReviewForReply] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleAlertsPress = () => {
    console.log('Alerts pressed');
  };

  const movieReviews = [
    {
      id: '1',
      title: 'Black Panther',
      rating: 4,
      msid: '5643217',
      timeAgo: '1 min ago',
      classification: 'U/A',
      poster: 'https://via.placeholder.com/60x60/4A5568/FFFFFF?text=BP',
      reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      hasReply: false
    },
    {
      id: '2',
      title: 'Bumblebee',
      rating: 5,
      msid: '5643217',
      timeAgo: '1 min ago',
      classification: 'U/A',
      poster: 'https://via.placeholder.com/60x60/F59E0B/FFFFFF?text=BB',
      reviewText: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
      hasReply: true,
      replyText: 'Thank you for your wonderful review! We\'re thrilled you enjoyed the movie.'
    },
    {
      id: '3',
      title: 'Zero',
      rating: 3,
      msid: '5643217',
      timeAgo: '1 min ago',
      classification: 'U/A',
      poster: 'https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=Z',
      reviewText: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      hasReply: false
    },
    {
      id: '4',
      title: 'Mary Poppins Returns',
      rating: 4,
      msid: '5643217',
      timeAgo: '1 min ago',
      classification: 'U/A',
      poster: 'https://via.placeholder.com/60x60/EC4899/FFFFFF?text=MP',
      reviewText: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.',
      hasReply: true,
      replyText: 'We appreciate your feedback and are glad you had a great experience!'
    },
    {
      id: '5',
      title: 'Hate Story IV',
      rating: 2,
      msid: '5643217',
      timeAgo: '1 min ago',
      classification: 'A',
      poster: 'https://via.placeholder.com/60x60/8B5CF6/FFFFFF?text=HS',
      reviewText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.',
      hasReply: false
    },
    {
      id: '6',
      title: 'Tholi Prema',
      rating: 5,
      msid: '5643217',
      timeAgo: '1 min ago',
      classification: 'U/A',
      poster: 'https://via.placeholder.com/60x60/10B981/FFFFFF?text=TP',
      reviewText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
      hasReply: false
    }
  ];

  const getBorderColor = (rating) => {
    if (rating >= 4) return '#10B981';
    if (rating === 3) return '#F59E0B';
    return '#EF4444';
  };

  const getFilteredReviews = () => {
    if (selectedFilter === 0) return movieReviews;
    return movieReviews.filter(review => review.rating === selectedFilter);
  };

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
    setIsFilterVisible(false);
  };

  const handleReviewPress = (reviewId) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId);
  };

  const handleReplyPress = (reviewId) => {
    setSelectedReviewForReply(reviewId);
    setReplyText('');
    setIsReplyModalVisible(true);
  };

  const handleViewReplyPress = (reviewId) => {
    const review = movieReviews.find(r => r.id === reviewId);
    if (review && review.replyText) {
      setSelectedReviewForReply(reviewId);
      setReplyText(review.replyText);
      setIsReplyModalVisible(true);
    }
  };

  const handleSendReply = () => {
    console.log('Reply sent:', replyText);
    setIsReplyModalVisible(false);
    setSelectedReviewForReply(null);
    setReplyText('');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => index < rating ? 'star' : 'star-outline');
  };

  return {
    expandedReview,
    setExpandedReview,
    isFilterVisible,
    setIsFilterVisible,
    selectedFilter,
    setSelectedFilter,
    isReplyModalVisible,
    setIsReplyModalVisible,
    selectedReviewForReply,
    setSelectedReviewForReply,
    replyText,
    setReplyText,
    handleAlertsPress,
    movieReviews,
    getBorderColor,
    getFilteredReviews,
    handleFilterSelect,
    handleReviewPress,
    handleReplyPress,
    handleViewReplyPress,
    handleSendReply,
    renderStars,
    STAR_FILTERS,
  };
};
