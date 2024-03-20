import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {color} from '../../theme';
import {widthResponsive} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigations';
import {mvs} from 'react-native-size-matters';
import {DetailCard, LoadingIndicator, TopNavigation} from '../../components';
import {useDetailDataHook} from '../../hooks/use-dataDetail.hook';

type PostDetailProps = NativeStackScreenProps<RootStackParams, 'DetailData'>;

const DetailData = ({route}: PostDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {isLoading, isError, detailData, getDetailData, setdetailData} =
    useDetailDataHook();
  useEffect(() => {
    getDetailData({id: route.params.id});
  }, []);

  const leftIconOnPress = () => {
    navigation.goBack();
    setdetailData(undefined);
  };
  return (
    <View style={styles.container}>
      <TopNavigation.Type1
        title="Detail Data"
        leftIconAction={leftIconOnPress}
        itemStrokeColor={color.Neutral[10]}
      />
      {detailData && (
        <View style={styles.bodyContainer}>
          <Text>{detailData.title}</Text>
        </View>
      )}
      {isLoading && <LoadingIndicator />}
    </View>
  );
};

export default DetailData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  textStyle: {
    fontSize: mvs(13),
    color: color.Neutral[10],
  },
  bodyContainer: {
    padding: widthResponsive(20),
  },
});
