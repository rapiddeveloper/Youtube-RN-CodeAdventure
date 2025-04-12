import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

interface ProfilePhotoProps {
    url: string
}

const ProfilePhoto = (props: ProfilePhotoProps) => {
    
  return (
    <View>
       <Image source={props.url} style={styles.image} />
    </View>
  )
}

export default ProfilePhoto

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
       // aspectRatio: 1/1,
        borderRadius: 100
    }
})