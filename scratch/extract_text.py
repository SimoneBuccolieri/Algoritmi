import PyPDF2
import sys

def extract_text(pdf_path):
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ""
        for i in range(len(reader.pages)): 
            text += f"\n--- Page {i+1} ---\n"
            page_text = reader.pages[i].extract_text()
            if page_text:
                text += page_text
    return text

if __name__ == "__main__":
    print(extract_text("Guida Template Funzioni.pdf"))
    print(extract_text("Guida Ricorrenze e Master Theorem.pdf"))
    print(extract_text("Guida agli Esercizi Brevi_ Heap, Hash, Huffman, Master Theorem.pdf"))
    print(extract_text("Guida Programmazione Dinamica e Algoritmi Greedy.pdf"))
