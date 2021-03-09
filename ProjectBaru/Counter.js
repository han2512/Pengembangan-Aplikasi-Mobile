import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

import {useDispatch,useSelector} from 'react-redux'
import {plusCounter,minusCounter} from './redux/action'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <TouchableOpacity style={{backgroundColor:'#FF0000',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}}
             onPress={()=>dispatch(minusCounter(counter))}>
                <Text style={{fontSize:30}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:30,marginLeft:20,marginRight:20,backgroundColor:'#FFFF00'}}>{counter}</Text>
            <TouchableOpacity style={{backgroundColor:'#66FF00',paddingBottom:5,paddingTop:5,paddingLeft:20,paddingRight:20}}
            onPress={()=>dispatch(plusCounter(counter))}>
                <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter
