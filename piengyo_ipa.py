import pandas as pd
import numpy as np

# 字表來自古音小鏡，手動排查增添
df = pd.read_csv('平遥話韻图.csv')

# 對聲母和韻母作處理
def consonant_reg(c):
    if c == '零':
        return ''
    if c[-1] == 'h':
        return c[:-1] + 'ʰ'
    if c == 'ʐ':
        return 'ɻ'
    return c

def vowel_reg(v):
    if v[-2:] == 'æe':
        return v.replace('æe', 'ɛ')
    if v[-1] == 'ɑ':
        return v.replace('ɑ', 'a')
    if v[-2:] == 'əu':
        return v.replace('əu', 'ɤu')
    if v == 'ɤ':
        return 'ʅɘ'
    if v[-1] == 'ɛ':
        return v.replace('ɛ', 'e̞')
    if v == 'uə':
        return 'uo̞'
    if v == 'yə':
        return 'yo̞'
    if v[-2:] == 'ɑ~':
        if v[0] != 'u':
            return v[:-1].replace('ɑ', 'a') + '̃'
        else:
            return v[:-1].replace('ɑ', 'o̞') + '̃'
    if v[-2:] == 'ɛ~':
        return v[:-1].replace('ɛ', 'e̞') + '̃'
    return v


# 建立IPA與拼音轉換關係
def ipa_to_py(c, v):
    convert_dict_c = {
        'p': 'b',
        'pʰ': 'p',
        't': 'd',
        'tʰ': 't',
        'ts': 'z',
        's': 's',
        'z': 'zs',
        'tsʰ': 'c',
        'tʂ': 'zh',
        'ʂ': 'sh',
        'ɻ': 'r',
        'tʂʰ': 'ch',
        'tɕ': 'j',
        'ɕ': 'x',
        'tɕʰ': 'q',
        'k': 'g',
        'kʰ': 'k',
        'x': 'h',
        'm': 'm',
        'n': 'n',
        'nz': 'nz',
        'ȵ': 'n',
        'ɳ': 'nr',
        'ŋ': 'ng',
        'l': 'l'
    }
    convert_dict_v = {
        'u': 'u',
        'i': 'i',
        'y': 'yu',
        'ei': 'ei',
        'ɛ': 'ae',
        'a': 'a',
        'ɔ': 'o',
        'ɤu': 'ou',
        'ʅɘ': 'e',
        'ɿ': 'i',
        'ʅ': 'i',
        'ʮ': 'u',
        'ia': 'ia',
        'iɔ': 'io',
        'iɤu': 'iou',
        'ie̞': 'ie',
        'uo̞': 'uo',
        'uei': 'uei',
        'uɛ': 'uae',
        'ua': 'ua',
        'yo̞': 'yuo',
        'ye̞': 'yue',
        'əŋ': 'eng',
        'iəŋ': 'ieng',
        'uəŋ': 'ueng',
        'yəŋ': 'yueng',
        'ã': 'ang',
        'iã': 'iang',
        'iẽ̞': 'ie',
        'uõ̞': 'uon',
        'yẽ̞': 'yue',
        'ʌʔ': 'aq',
        'iʌʔ': 'iaq',
        'uʌʔ': 'uaq',
        'yʌʔ': 'yuaq',
        'ər': 'er'
    }
    if c == '':
        if v[0] == 'u':
            if v == 'u' or v == 'uõ̞' or v == 'uʌʔ':
                return 'w' + convert_dict_v[v]
            else:
                return 'w' + convert_dict_v[v][1:]
        if v[0] == 'i':
            if v == 'i' or v == 'iəŋ' or v == 'iʌʔ':
                return 'y' + convert_dict_v[v]
            else:
                return 'y' + convert_dict_v[v][1:]
        return convert_dict_v[v]
    if v == '':
        return convert_dict_c[c]
    return convert_dict_c[c]+convert_dict_v[v]

ipa_dict = {}
df.fillna('', inplace=True)
with open('ipa_to_py.txt', 'w') as f:
    for i in range(len(df)):
        for j in range(3, len(df.columns)):
            if not df.iloc[i, j] == '':
                tone, chars = df.iloc[i, j].replace('\xa0', ' ').split(' ')
                # 是否跳過非城內音
                if chars[0] == '[': 
                    continue
                ipa = consonant_reg(df.columns[j]) + vowel_reg(df.iloc[i, 2])
                py = ipa_to_py(consonant_reg(df.columns[j]), vowel_reg(df.iloc[i, 2]))
                ipa_dict[ipa] = py
    for (ipa, py) in ipa_dict.items():
        f.write(ipa + '\t' + py + '\n')
# # 輸出全部合法音節
# f = open('dict_test.txt', 'w')

# for i in range(len(df)):
#     for j in range(3, len(df.columns)):
#         try:
#             pair = df.iloc[i, j]
#             pair.replace('\xa0', ' ')
#             pair = pair.split(' ')
#         except AttributeError:
#             continue
#         print(pair)
        
#         ipa = consonant_reg(df.columns[j]) + vowel_reg(df.iloc[i, 2]) + pair[0]
#         for char in pair[1]:
#             line = ipa + '\t' + char + '\n'
#             f.write(line)

