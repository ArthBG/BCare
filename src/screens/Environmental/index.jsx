import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'


export default function Environmental() {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.title}>Environmental Clinic</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionText}>
          Welcome to Environmental Clinic, where we prioritize health and wellness in harmony with nature.
          Our team of experts is committed to providing sustainable healthcare solutions for you and your family.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <Text style={styles.sectionText}>
          - Preventive Care{'\n'}
          - Holistic Treatments{'\n'}
          - Natural Therapies{'\n'}
          - Wellness Workshops{'\n'}
          - Eco-friendly Practices
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>
          Address: 123 Green Avenue{'\n'}
          Phone: (123) 456-7890{'\n'}
          Email: info@environmentalclinic.com
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Opening Hours</Text>
        <Text style={styles.sectionText}>
          Monday - Friday: 9:00 AM - 6:00 PM{'\n'}
          Saturday: 10:00 AM - 4:00 PM{'\n'}
          Sunday: Closed
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Environmental Clinic</Text>
      </View>
    </ScrollView>
  );
}

