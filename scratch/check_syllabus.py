import re

with open('ESERCIZI_SVOLTI.md', 'r', encoding='utf-8') as f:
    text_svolti = f.read()

with open('SILLABO_ESERCIZI_ESAME.md', 'r', encoding='utf-8') as f:
    text_syllabus = f.read()

# Let's inspect the exercises in syllabus
pattern = re.compile(r'#### 📝 Esercizio ([A-D]\.[0-9]\.[0-9])')
matches = pattern.findall(text_syllabus)

print(f'Found {len(matches)} exercises in syllabus: {matches}')
