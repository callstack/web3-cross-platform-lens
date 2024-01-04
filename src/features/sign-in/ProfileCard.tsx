import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Octicons from '@expo/vector-icons/Octicons';
import Text from '../../components/Text';
import { Profile, ProfilePictureSet } from '../../lib/lens-sdk';
import { LensButton } from '../../components/LensButton';
import { theme } from '../../lib/theme';

type ProfileCardProps = {
  profile: Profile;
  isLastLoggedInProfile: boolean;
};

function ProfileCard({ profile, isLastLoggedInProfile }: ProfileCardProps) {
  const coverImageUri = profile.metadata?.coverPicture?.optimized?.uri;
  const avatarImageUri = (profile.metadata?.picture as ProfilePictureSet)
    ?.thumbnail?.uri;

  return (
    // Display the cover image as the background of the card
    <ImageBackground
      style={[
        styles.container,
        {
          borderColor: isLastLoggedInProfile
            ? theme.colors.primary
            : theme.colors.border,
        },
      ]}
      source={{
        uri: coverImageUri,
      }}>
      <View style={styles.overlay} />
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          {/* Display the profile avatar */}
          {avatarImageUri ? (
            <Image
              accessibilityIgnoresInvertColors
              source={{ uri: avatarImageUri }}
              style={styles.avatarImage}
            />
          ) : (
            <View style={styles.avatarImage}>
              <Octicons name="person" size={16} color={theme.colors.disabled} />
            </View>
          )}
          <View style={styles.textContainer}>
            {/* Display the profile name */}
            {profile.metadata?.displayName && (
              <Text style={styles.name} numberOfLines={1}>
                {profile.metadata.displayName}
              </Text>
            )}

            {/* Display the profile handle */}
            {profile.handle?.localName && (
              <Text numberOfLines={1}>@{profile.handle?.localName}</Text>
            )}

            {/* Display the last used profile indicator */}
            {isLastLoggedInProfile && (
              <Text style={styles.lastUsedProfile}>Last used</Text>
            )}
          </View>
        </View>

        {/* Display the button to sign in */}
        <LensButton profileId={profile.id} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 800,
    width: '100%',
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.overlay,
    borderWidth: 2,
    borderRadius: 10,
    borderCurve: 'continuous',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 4,
  },
  name: {
    fontWeight: 'bold',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  lastUsedProfile: {
    fontSize: 10,
    color: theme.colors.primary,
  },
});

export default ProfileCard;
