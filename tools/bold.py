import re

def bold_speaker_lines(file_path, output_path):
    # Read the input file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.readlines()

    # Initialize output content
    updated_content = []

    # Patterns for matching
    speaker_pattern = r'^([^\(\n]+ \([\d:]{8}\))'  # Matches "Name (timestamp)"
    timestamp_pattern = r'^\(([\d:]{8})\)'         # Matches "(timestamp)"
    # Pattern to detect Chinese characters
    chinese_pattern = r'[\u4e00-\u9fff]'

    for line in content:
        line = line.rstrip('\n')  # Remove trailing newline for processing
        # Case 1: Line starts with "Name (timestamp)"
        if re.match(speaker_pattern, line):
            updated_line = re.sub(speaker_pattern, r'**\1**', line)
        # Case 2: Line starts with "(timestamp)"
        elif re.match(timestamp_pattern, line):
            updated_line = re.sub(timestamp_pattern, r'**(\1)**', line)
        # Case 3: Line starts with neither, bold the entire line
        else:
            updated_line = f'**{line}**' if line.strip() else line  # Avoid bolding empty lines
        updated_content.append(updated_line + '\n\n')

    # Write the modified content to the output file
    with open(output_path, 'w', encoding='utf-8') as file:
        file.writelines(updated_content)

    print(f"Processed file saved to {output_path}")

# Example usage
src_path = '../_posts/'
input_file = src_path + 'combined_transcript.md'
output_file = src_path + 'formatted_transcript.md'
bold_speaker_lines(input_file, output_file)