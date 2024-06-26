import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../commonStyle';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import MovieGenreSelection from './function';

const QuizScreenOne = () => {

    const navigation = useNavigation()
    //#region MESSAGES
        const msgQuestion = 'Qual o seu gênero de filme favorito?'
        const contentScreenQuizStart = ''
    //#endregion

    return(
    <Animatable.View 
        // animation={'lightSpeedIn'}
        style={styles.subContainer}>
        <Image
            source={require('../../../assets/cinematch_logo.png')} 
            style={styles.logo}/>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{msgQuestion}</Text>
                <MovieGenreSelection />
                <View style={styles.rowButtonStep}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}>
                        <Text style={styles.backButtonText}>VOLTAR</Text>
                    </TouchableOpacity>
                    <View style={{ width:'10%' }}></View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('screentwo')}
                        style={styles.startButton}>
                        <Text style={styles.startButtonText}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </Animatable.View>
    );
}

export default QuizScreenOne;
