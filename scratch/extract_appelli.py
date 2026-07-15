import PyPDF2

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
    print(extract_text("Raccolta Appelli.pdf"))
