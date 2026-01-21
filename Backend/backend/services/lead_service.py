class LeadService:
    # Simulating a database with an in-memory list
    leads_db = []

    @staticmethod
    def check_duplicate_phone(phone):
        """
        Check if a lead with the given phone number already exists.
        Returns True if duplicate, False otherwise.
        """
        for lead in LeadService.leads_db:
            if lead.get('phone') == phone:
                return True
        return False

    @staticmethod
    def create_lead(data):
        """
        Creates a new lead.
        1. Checks for duplicate phone number.
        2. Creates lead record.
        Returns a tuple (success: bool, message: str, data: dict/None)
        """
        phone = data.get('phone')
        
        if not phone:
             return False, "Phone number is required", None

        if LeadService.check_duplicate_phone(phone):
            return False, "Lead with this phone number already exists", None

        # Create new lead (Simulating DB insert)
        new_lead = {
            "id": len(LeadService.leads_db) + 1,
            "firstName": data.get('firstName'),
            "lastName": data.get('lastName'),
            "phone": phone,
            "email": data.get('email'),
            "status": "New"
        }
        
        LeadService.leads_db.append(new_lead)
        return True, "Lead created successfully", new_lead
