import json
import os

def deep_merge(dict1, dict2):
    for key, value in dict2.items():
        if isinstance(value, dict) and key in dict1 and isinstance(dict1[key], dict):
            deep_merge(dict1[key], value)
        else:
            dict1[key] = value

def merge_lang(locales_dir, lang_code):
    all_files = os.listdir(locales_dir)
    target_files = [f for f in all_files if f.startswith(lang_code + '-') and f.endswith('.json')]
    # Add the base file if it exists but is different from the target
    base_file = lang_code + '.json'
    
    merged = {}
    
    # Order to merge: base -> complete -> fixed
    order = [base_file, lang_code + '-complete.json', lang_code + '-fixed.json']
    
    for f in order:
        path = os.path.join(locales_dir, f)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as jf:
                try:
                    data = json.load(jf)
                    print(f"Merging {f}...")
                    deep_merge(merged, data)
                except Exception as e:
                    print(f"Error loading {f}: {e}")
    
    # Also handle governance files if they exist
    gov_file = f"governance-{lang_code}.json"
    gov_path = os.path.join(locales_dir, gov_file)
    if os.path.exists(gov_path):
        with open(gov_path, 'r', encoding='utf-8') as jf:
            try:
                data = json.load(jf)
                print(f"Merging {gov_file} into governance_page...")
                if 'governance_page' not in merged:
                    merged['governance_page'] = {}
                deep_merge(merged['governance_page'], data)
            except Exception as e:
                print(f"Error loading {gov_file}: {e}")

    output_path = os.path.join(locales_dir, f"{lang_code}.json")
    with open(output_path, 'w', encoding='utf-8') as jf:
        json.dump(merged, jf, indent=2, ensure_ascii=False)
    print(f"Saved {output_path} with {len(merged)} top-level keys.")

locales_path = 'locales'
langs = ['en', 'fr', 'de', 'nl', 'bg']

for lang in langs:
    merge_lang(locales_path, lang)
