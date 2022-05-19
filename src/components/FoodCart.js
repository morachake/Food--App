import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { Icon } from '@rneui/base'
import { parameters,colors } from '../global/styles'


const FoodCart = ({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}) => {
  return (
      <TouchableOpacity>
          <View style={{ ...styles.cardView,width:screenWidth }}>
              <Image
                  style={{ ...styles.image, width: screenWidth }}
                  source={{uri:images}}
              />
          
          <View>
              <View>
                  <Text style={styles.restaurantName}>{restaurantName}</Text>
              </View>
              <View style={{ flex: 1,flexDirection:'row'}}>
                  <View style={styles.restaurantdistance}>
                      <Icon
                          name='place'
                          type='material'
                          color={colors.grey2}
                          size={18}
                          iconStyle={{
                                  marginTop: 3
                              }
                          }
                      />
                      <Text style={styles.minuteaway}>{ farAway} Min</Text>
                  </View>
                  <View style={{flex:9,flexDirection: 'row'}}>
                      <Text style={styles.businessAddress}>{ businessAddress}</Text>
                  </View>
              </View>
          </View>
          </View>
          <View style={styles.review}>
              <Text style={styles.averageReview}>{ averageReview}</Text>
              <Text  style={styles.numberOfReview}>{ numberOfReview} reviews</Text>
          </View>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5, 
        borderWidth: 1,
        borderColor: colors.grey4,
        borderBottomLeftRadius:5
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150
    },
    restaurantName: {
        fontSize : 17,
        fontWeight: 'bold',
        color: colors.grey1,
        marginTop: 5,
        marginLeft:10
    },
    restaurantdistance: {
        flexDirection : 'row',
        flex: 4,
        borderRightColor: colors.grey4,
        paddingRightColor: colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth:1
    },
    minuteaway: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.grey3
    },
    businessAddress: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
        paddingHorizontal: 10
    },
    review:{
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52,52,52,0.3)',
        paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderTopLeftRadius:12
    },
    averageReview: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    },
    numberOfReview: {
        color: '#ffff',
        fontSize: 13,
        marginRight: 0,
       marginLeft: 0
    }
})

export default FoodCart