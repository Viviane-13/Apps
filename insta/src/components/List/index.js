import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props) {
  function loadIcon(likeada) {
    return likeada
      ? require('../../assets/likeada.png')
      : require('../../assets/like.png');
  }
  function showLikes(likers) {
    if (likers === 0) {
      return;
    }
    return (
      <Text style={styles.likes}>
        {likers} {likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }
  return (
    <View>
      <View style={styles.viewProfile}>
        <Image source={{uri: props.data.imgprofile}} style={styles.ftProfile} />
        <Text style={styles.nameUser}>{props.data.name}</Text>
      </View>
      <Image
        source={{uri: props.data.imgpublication}}
        style={styles.ftPublication}
        resizeMode="cover"
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={loadIcon(props.data.likeada)}
            style={styles.iconLike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../../assets/comment.png')}
            style={styles.iconLike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../../assets/send.png')}
            style={styles.iconLike}
          />
        </TouchableOpacity>
      </View>
      {showLikes(props.data.likers)}
      <Text style={styles.nameFooter}>{props.data.name}</Text>
      <Text style={styles.descFooter}>{props.data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  ftProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameUser: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  ftPublication: {
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconLike: {
    width: 25,
    height: 25,
  },
  btnSend: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nameFooter: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descFooter: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});
