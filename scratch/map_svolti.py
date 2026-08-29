import re

with open('ESERCIZI_SVOLTI.md', 'r', encoding='utf-8') as f:
    text_sv = f.read()

# Let's find all headers in ESERCIZI_SVOLTI
sv_headers = re.findall(r'### 📝 (?:Es )?([A-D]\.[0-9]+):?([^\n]+)', text_sv)
print("Exercises in ESERCIZI_SVOLTI:")
for code, title in sv_headers:
    print(f"  {code}: {title[:60]}")
