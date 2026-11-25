import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { registerRootComponent } from 'expo';

const translations = {
  en: { title: 'Financial Manager V2', balance: 'Total Balance', income: 'Income', expense: 'Expenses', save: 'Save' },
  fr: { title: 'Gestionnaire Financier V2', balance: 'Solde Total', income: 'Revenus', expense: 'Dépenses', save: 'Enregistrer' },
  ar: { title: 'مدير المال V2', balance: 'الرصيد الإجمالي', income: 'الدخل', expense: 'المصاريف', save: 'حفظ' }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <View style={styles.langRow}>
        <TouchableOpacity onPress={() => setLang('en')}><Text style={styles.langBtn}>EN</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setLang('fr')}><Text style={styles.langBtn}>FR</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setLang('ar')}><Text style={styles.langBtn}>AR</Text></TouchableOpacity>
      </View>
      <Text>{t.balance}: $1250</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  langRow: { flexDirection: 'row', gap: 10, margin: 20 },
  langBtn: { padding: 10, backgroundColor: '#eee' }
});

registerRootComponent(App);