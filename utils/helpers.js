import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const fileToBlob = async(path) => {
    const file = await fetch(path)
    const blob = await file.blob()
    return blob
}