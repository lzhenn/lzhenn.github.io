import re

def combine_transcripts(cn_file, en_file, output_file):
    # Regex pattern for CN file: "Name (HH:MM:SS) Text"
    cn_pattern = r'^([A-Za-z\s]+)\s*\((\d{2}:\d{2}:\d{2})\)(.*)$'
    # Regex pattern for EN file timestamp line: "(HH:MM:SS) Text"
    en_timestamp_pattern = r'^\((\d{2}:\d{2}:\d{2})\)(.*)$'
    
    # Read both files
    with open(cn_file, 'r', encoding='utf-8') as cn_in, open(en_file, 'r', encoding='utf-8') as en_in:
        cn_lines = cn_in.readlines()
        en_lines = en_in.readlines()
    
    # Initialize output
    combined_lines = []
    
    # Process files
    i, j = 0, 0
    while i < len(cn_lines) and j < len(en_lines):
        cn_line = cn_lines[i].strip()
        en_line = en_lines[j].strip()
        
        # Check if lines are headers (no speaker/timestamp)
        cn_is_header = not re.match(cn_pattern, cn_line)
        en_is_speaker = j + 1 < len(en_lines) and re.match(en_timestamp_pattern, en_lines[j + 1].strip())
        

        combined_lines.append(cn_line + '\n')
        combined_lines.append(en_line + '\n')
        i += 1
        j += 1
        continue
        
 
    
    # Write to output file
    with open(output_file, 'w', encoding='utf-8') as outfile:
        outfile.writelines(combined_lines)

if __name__ == '__main__':
    src_path = '../_posts/'
    cn_file = src_path + 'CN.txt'
    en_file = src_path + 'EN.txt'
    output_file = src_path + 'combined_transcript.md'
    combine_transcripts(cn_file, en_file, output_file)