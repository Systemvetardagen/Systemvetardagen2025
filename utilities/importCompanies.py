import json
from typing import List, Optional, Dict, Any
import os

#SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
#DEFAULT_JSON_PATH = os.path.join(SCRIPT_DIR, '../systemvetardagen2025frontend/src/assets/companies.json')
DEFAULT_JSON_PATH = '../systemvetardagen2025frontend/src/assets/companies.json'

CANDIDATE_PROGRAMS_MAP = {
    'Data- och systemvetenskap': 'SYSDK',
    'Affärssystem och tjänstedesign': 'SAFFK',
    'Datavetenskap': 'SDAVK',
    'Datorspelsutveckling': 'SGAMK',
    'Digitala medier': 'SDIMK',
    'Ekonomi och IT': 'SITEK',
    'Interaktionsdesign': 'SIADK',
    'Marknadskommunikation och IT': 'SMARK'
}

MASTER_PROGRAMS_MAP = {
    'AI och hälsa': 'SAIHO',
    'Informationssäkerhet': 'SMINO',
    'Öppen e-förvaltning': 'SMEFO',
    'Data- och systemvetenskap': 'SCSSO',
    'Hälsoinformatik': 'SHINO',
    'Strategisk ledning med informationssystem': 'SSLIO',
    'Beslutsanalys och data science': 'SDSBO',
    'IT Projektledning': 'SPROM',
    'Design för kreativ och immersiv teknik': 'SDKIO'
}

POSITIONS_MAP = {
    'Heltidstjänster': 'fullTime',
    'Deltidstjänster': 'partTime',
    'Examensarbete': 'thesis',
    'Traineeprogram': 'trainee',
    'Sommarpraktik': 'internship'
}

def get_input(prompt: str, required: bool = False) -> Optional[str]:
    if (required):
        prompt += " (required)"
    prompt += ": "
    while True:
        value = input(prompt.strip())
        if required and not value:
            print("This field is required!")
            continue
        return value if value else None

def get_number_input(prompt: str) -> Optional[int]:
    value = get_input(prompt)
    if value:
        try:
            return int(value)
        except ValueError:
            print("Invalid number, setting to None")
    return None

def get_contact_info() -> List[Dict[str, Any]]:
    contacts = []
    isFirstContact = True
    while True:
        name = get_input("\nContact name (Press enter when done adding contacts)", isFirstContact)
        if not name:
            break
        
        contact = {
            "name": name,
            "mail": get_input("Contact email", True),
            "phoneNumber": get_input("Contact phone number") or None
        }
        contacts.append({k: v for k, v in contact.items() if v is not None})
        isFirstContact = False;
    
    return contacts

def parse_list_input(input_str: str, mapping_dict: Dict[str, str]) -> List[str]:
    if not input_str:
        return []
    
    items = [item.strip() for item in input_str.split(';') if item.strip()]
    return [mapping_dict.get(item, item) for item in items]

def collect_company_data() -> Dict[str, Any]:
    print("\n=== Company Information Collection ===\n")
   
    name = get_input("Company name", True)
    
    company = {
        "name": name,
        "id": get_input("Company ID", True),  
        "websiteLink": get_input("Website URL", True)
    }
    
    optional_fields = [
        ("slogan", "Company slogan"),
        ("founded", "Founded year", True),
        ("employeesSweden", "Number of employees in Sweden", True),
        ("employeesTotal", "Total number of employees", True),
        ("linkedIn", "LinkedIn URL"),
        ("instagram", "Instagram URL"),
        ("facebook", "Facebook URL")
    ]
    
    for field, prompt, *args in optional_fields:
        if args and args[0]:  # If it's a numeric field
            value = get_number_input(prompt)
        else:
            value = get_input(prompt)
        if value is not None:
            company[field] = value
    
    is_partner = get_input("Is partner? (yes/no)")
    if is_partner and is_partner.lower() in ['yes', 'y', 'true']:
        company["isPartner"] = True
    else:
        company["isPartner"] = False
    
    print("\nEnter programs/positions separated by semicolons (;)")
    candidate_programs = get_input("Candidate programs")
    master_programs = get_input("Master programs")
    positions = get_input("Positions")
    
    if candidate_programs:
        company["candidatePrograms"] = parse_list_input(candidate_programs, CANDIDATE_PROGRAMS_MAP)
    if master_programs:
        company["masterPrograms"] = parse_list_input(master_programs, MASTER_PROGRAMS_MAP)
    if positions:
        company["positions"] = parse_list_input(positions, POSITIONS_MAP)
    
    print("\nEnter contact information (at least one contact required)")
    contacts = get_contact_info()
    while not contacts:
        print("At least one contact is required!")
        contacts = get_contact_info()
    company["contacts"] = contacts
    
    return company

def save_to_json(data: Dict[str, Any], filename: str = DEFAULT_JSON_PATH) -> None:
    try:
        # Load existing data if file exists
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                companies = json.load(f)
                print("Loaded json")
        else:
            companies = []
            print("Created new array since json was empty")
        # Add new company
        companies.append(data)
        print("Appended data")
        
        # Save updated data
        with open(filename, 'w', encoding='utf-8') as f:
            print("dumping json")
            json.dump(companies, f, indent=2, ensure_ascii=False)
        print(f"\nCompany data successfully saved to {filename}")
    
    except Exception as e:
        print(f"Error saving data: {e}")

def main():
    try:
        company_data = collect_company_data()
        save_to_json(company_data)
    except KeyboardInterrupt:
        print("\nProcess interrupted by user. Data not saved.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
