import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  FlatList
} from 'react-native';

import {SkillCard} from '../components/SkillCard';
import {Button} from '../components/Button';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skillsList, setSkillsList] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');


  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    if (newSkill !== ''){
      setSkillsList([...skillsList, data]);
    }
  }

  function handleRemoveSkill(id: string) {
    const updatedList = skillsList.filter(skill => {
      return skill.id !== id
    })
    setSkillsList(updatedList);
  }

  function defineGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Bom dia!');
    }else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Boa tarde!');
    }else {
      setGreeting('Boa noite!');
    }
  }

  useEffect(() => {
    defineGreeting();
    
  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Bem-vindo, Gabriel
      </Text>

      <Text style={{color: '#FFF', textAlign: 'center'}}>
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill!"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
        onPress={handleAddSkill} 
        title="Adicionar"
      />

      <Text
        style={[styles.title, { marginVertical: 50, textAlign: 'left' }]}
      >
        My Skills:
      </Text>

      <FlatList 
        data={skillsList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />


     {/*  {
        skillsList.map((skill, index) => (
            <SkillCard skill={skill} key={index + 1}/>
        ))
      } */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#1F1E25',
    padding: Platform.OS === 'ios' ? 15 : 10,
    color: '#FFF',
    marginTop: 10,
    borderRadius: 5,
  },
});