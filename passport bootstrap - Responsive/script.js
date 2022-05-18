function validateForm() {


    //0
    let file = document.getElementById('file_num').value;

    //photo & sign
    let photo = document.getElementById("photo").value;
    let sign = document.getElementById("sign").value;


    //1.1-----1.4-----1.5-----1.6
    let applying = document.querySelector('input[name=applying]:checked');
    let re_reason = document.querySelector('input[name=re_reason]:checked');
    let ex_reason = document.querySelector('input[name=ex_reason]:checked');
    let other_reason = document.getElementById('other_reason1');
    let other_reason2 = document.getElementById('other_reason2');
    let app_type = document.querySelector('input[name=app_type]:checked');
    let booklet = document.querySelector('input[name=booklet_type]:checked');
    let validity = document.querySelector('input[name=validity]:checked');

    //2.1
    let name = document.getElementById('name').value;
    let middle_name = document.getElementById('middle_name').value;
    let surname = document.getElementById('surname').value;

    //2.2-----2.3-----2.4-----2.5
    let other_name = document.querySelector('input[name=other_name]:checked');
    let change = document.querySelector('input[name=changes_name]:checked');
    let birth = document.getElementById("birth_date").value;
    let country_select = document.querySelector('input[name=country_select]:checked');
    let birth_place = document.getElementById("birth_place").value;
    let birth_district = document.getElementById("birth_district").value;
    let birth_state = document.getElementById("birth_state").value;
    let country = document.getElementById('country').value;

    //2.6------2.7-------2.8
    let gender = document.querySelector('input[name=gender]:checked');
    let marital = document.querySelector('input[name=marital_status]:checked');
    let citizenship = document.querySelector('input[name=citizenship]:checked');
    //2.10
    let voter = document.getElementById('voter_id').value;
    let pan = document.getElementById('pan_id').value;
    //2.11
    let emp_type = document.querySelector('input[name=emp_type]:checked');
    //2.12
    let emp_org_name = document.getElementById('emp_org_name').value;
    //2.13
    let gov_servant = document.querySelector('input[name=gov_servant]:checked');
    //2.14
    let education = document.querySelector('input[name=edu_qualification]:checked');
    //2.15
    let non_ecr = document.querySelector('input[name=non_ecr]:checked');
    //2.16
    let mark = document.getElementById('mark_select').value;
    //2.17
    let aadhar = document.getElementById("aadhar").value;

    //3.1-----3.2
    let father = document.getElementById("father_name").value;
    let father_middle = document.getElementById("father_middle_name").value;
    let father_surname = document.getElementById("father_surname").value;
    let mother = document.getElementById("mother_name").value;
    let mother_middle = document.getElementById("mother_middle_name").value;
    let mother_surname = document.getElementById("mother_surname").value;
    let guardian = document.getElementById("guardian_name").value;
    let guardian_middle = document.getElementById("guardian_middle_name").value;
    let guardian_surname = document.getElementById("guardian_surname").value;
    let spouse = document.getElementById("spouse_name").value;
    let spouse_middle = document.getElementById("spouse_middle_name").value;
    let spouse_surname = document.getElementById("spouse_surname").value;
    let pass_file = document.querySelector('input[name=pass_file]:checked')
    let father_pass = document.getElementById("father_passport_no").value;
    let mother_pass = document.getElementById("mother_passport_no").value;

    //4.1
    let street = document.getElementById("street").value;
    let town = document.getElementById("town").value;
    let district = document.getElementById("district").value;
    let police = document.getElementById("police_station").value;
    let state = document.getElementById("state").value;
    let pin = document.getElementById("pin").value;
    let mobile = document.getElementById("mobile_no").value;
    let email = document.getElementById("email").value;
    //4.2
    let same_add = document.querySelector('input[name=same_add]:checked')


    //5
    let em_name = document.getElementById("em_name").value;
    let em_address = document.getElementById("em_address").value;
    let em_email = document.getElementById("em_email").value;

    //6
    let certi_no = document.getElementById('certi_no').value;
    let issue_date = document.getElementById('issue_date').value;
    let expiry_date = document.getElementById('expiry_date').value;
    let issue_place = document.getElementById('issue_place').value;
    let not_issued = document.querySelector('input[name=not_issued_pass]:checked')
    let file_6 = document.getElementById('file_no').value;
    let month_year = document.getElementById('month_year').value;
    let office = document.getElementById('pass_office').value;


    //7
    let od1 = document.querySelector('input[name=od1]:checked')
    let od2 = document.querySelector('input[name=od2]:checked')
    let od3 = document.querySelector('input[name=od3]:checked')
    let od4 = document.querySelector('input[name=od4]:checked')
    let od5 = document.querySelector('input[name=od5]:checked')
    let od6 = document.querySelector('input[name=od6]:checked')
    let od7 = document.querySelector('input[name=od7]:checked')
    let od8 = document.querySelector('input[name=od8]:checked')
    let od9 = document.querySelector('input[name=od9]:checked')
    let od10 = document.querySelector('input[name=od10]:checked')
    let od11 = document.querySelector('input[name=od11]:checked')
    let od12 = document.querySelector('input[name=od12]:checked')
    let od13 = document.querySelector('input[name=od13]:checked')
    let od14 = document.querySelector('input[name=od14]:checked')
    let od15 = document.querySelector('input[name=od15]:checked')

    //8
    let fee = document.getElementById("fee").value;
    let dd = document.getElementById('dd_num').value;
    let dd_issue_date = document.getElementById('dd_issue_date').value;
    let dd_exp_date = document.getElementById('dd_exp_date').value;
    let bank = document.getElementById('bank_name').value;
    let branch = document.getElementById('branch').value;


    //9
    let en_file = document.getElementById("en_file").value;

    //10
    let sd_place = document.getElementById("sd_place").value;
    let sd_date = document.getElementById("sd_date").value;
    let sd_sign = document.getElementById("sd_sign").value;

    //
    let special_num = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
    let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let add_format = /[!@#$%^&*()_+\=\[\]{};':"\\|.<>\?]+/;
    let email_format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let today = new Date()
    let re = /(\.jpg|\.jpeg|\.pdf|\.png)$/i;

    let error = ""
    yn = 'Please select Yes or No';

    //--------------------1-------------------------------// 
    // checking null file number
    if (file == "") {
        error += "<a href='#file_num'>0.1 Please Enter File Number</a><br>";


    } else if (special.test(file)) {
        error += "<a href='#file_num'>0.1 File number not allowed special character</a><br>";
    } else if (special_num.test(file[0])) {
        error += "<a href='#file_num'>0.1 File number should start with Alphabet</a><br>";
    } else {
        error += length(file.length, 'file_num', '0.1', ' File Number', 12);
        file_slice = file.slice(-2)
        last_digit = today.getFullYear().toString().slice(-2)
        if (file_slice != last_digit) {
            error += "<a href='#file_num'>0.1 File Number's last two digit should have same as year last digit</a><br>";
        }
    }
    //checking applying for selected or not
    if (applying == null) {
        error += "<a href='#applying1'>1.1 Please Select Applying For</a><br>";
    } else if (applying.value == '2') {
        if (re_reason == null) {
            error += "<a href='#re_reason1'>1.2 Please Select re-isssue reason</a><br>";
        } else if (re_reason.value == '5') {
            if (ex_reason == null) {
                error += "<a href='#re_reason1'>1.3 Please Select change in existing personal  reason</a><br>";
            } else if (document.getElementById('ex9').checked == true) {
                if (other_reason.value == "") {
                    error += "<a href='#other_reason1'>1.3 Enter Other Reason</a><br>";
                } else if (special_num.test(other_reason.value)) {
                    error += "<a href='#other_reason1'>1.3 Other Reason only allowed Alphabets</a><br>";
                }
                if (other_reason2.value != "" && special_num.test(other_reason2)) {
                    error += "<a href='#other_reason2'>1.3 Other Reason only allowed Alphabets</a><br>";
                }
            }
        }
    }

    //photo
    if (photo == "") {
        error += "<a href='#photo'>1.1 Please Choose Passport Size Photo</a><br>";
    } else if (!re.exec(photo)) {
        error += "<a href='#photo'>1.1 Please Choose Photo in only .png/.jpg/.jpeg/.pdf type</a><br>";
    }

    //sign
    if (sign == "") {
        error += "<a href='#sign'>1.1 Please Choose Your Signature</a><br>";
    } else if (!re.exec(sign)) {
        error += "<a href='#sign'>1.1 Choose Sign in only .png/.jpg/.jpeg/.pdf type</a><br>";
    }
    //checking app type selected or not
    if (app_type == null) {
        error += "<a href='#app_type1'>1.4 Please Select Type of Application</a><br>";
    }
    //checking booklet selected or not
    if (booklet == null) {
        error += "<a href='#booklet_type1'>1.5 Please Select Type of Booklet</a><br>";
    }
    //checking validity selected or not
    if (validity == null) {
        error += "<a href='#validity1'>1.6 Please Select Validity Required</a><br>";
    }


    //------------------2-------------------//
    //Checking name entered or not
    if (name == "") {
        error += "<a href='#name'>2.1 Please Enter your name</a><br>";
    } else if (special_num.test(name)) {
        error += "<a href='#name'>2.1 Name should have only alphabets</a><br>";
    }

    if (middle_name != "" && special_num.test(middle_name)) {
        error += "<a href='#middle_name'>2.1 Middle Name should have only alphabets</a><br>";
    }

    //checking surname
    if (surname == "") {
        error += "<a href='#surname'>2.1 Please Enter your surname</a><br>"
    } else if (special_num.test(surname)) {
        error += "<a href='#surname'>2.1 surname should have only alphabets</a><br>"
    }

    //checking other name or not
    if (other_name == null) {
        error += "<a href='#other_name1'>2.2 " + yn + "</a><br>";
    }
    //checking name changed or not
    if (change == null) {
        error += "<a href='#changes_name1'>2.3 " + yn + "</a><br>";
    }

    //checking birth date 
    if (birth == "") {
        error += "<a href='#birth_date'>2.4 Please specify your Birth Date</a><br>";
    } else {
        t = new Date()
        past_month = t.setMonth(t.getMonth() - 1)
        if (new Date(birth) > past_month) {
            error += "<a href='#birth_date'>2.4 Birth Date should be atleast 1 month less than today</a><br>"
        }
    }


    if (country_select == null) {
        error += "<a href='#country_select1'>2.5 Please Select India or OutSide India</a><br>"
    } else if (country_select.value == 1) {
        //birth place
        if (birth_place == "") {
            error = error + "<a href='#birth_place'>2.5 Please enter Birth Place</a><br>";
        } else if (special_num.test(birth_place)) {
            error += "<a href='#birth_place'>2.5 Birth Place should have only alphabets</a><br>";
        }

        //birth district
        if (birth_district == "") {
            error += "<a href='#birth_district'>2.5 Please enter Birth District</a><br>";
        } else if (special_num.test(birth_district)) {
            error += "<a href='#birth_district'>2.5 District should have only alphabets</a><br>";
        } else if (birth_district.toLowerCase() == birth_place.toLowerCase()) {
            error += "<a href='#birth_district'>2.5 Birth District and Birth place should not be same.</a><br>";
        }

        //birth state
        if (birth_state == "") {
            error += "<a href='#birth_state'>2.5 Please enter Birth State</a><br>";
        } else if (special_num.test(birth_state)) {
            error += "<a href='#birth_state'>2.5 State should have only alphabets</a><br>";
        } else if (birth_state.toLowerCase() == birth_place.toLowerCase()) {
            error += "<a href='#birth_state'>2.5 Birth State and Birth place should not be same.</a><br>";
        } else if (birth_state.toLowerCase() == birth_district.toLowerCase()) {
            error += "<a href='#birth_state'>2.5 Birth State and Birth District should not be same.</a><br>";
        }
    } else if (country_select.value == 2) {
        if (country == "") {
            error += "<a href='#country'>2.5 Please Enter Your Country Name</a><br>"
        } else if (country.toLowerCase() == "india") {
            error += "<a href='#country'>2.5 Value can't be India</a><br>"
        }
    }

    //Gender
    if (gender == null) {
        error += "<a href='#gender1'>2.6 Please select your Gender </a><br>";
    }
    //Maritial status
    if (marital == null) {
        error += "<a href='#marital_status1'>2.7 Please select your Marital Status </a><br>";
    }
    //Citizenship
    if (citizenship == null) {
        error += "<a href='#citizenship1'>2.8 Please select your Citizenship </a><br>";
    }

    //pan
    if (pan != "") {
        if (special.test(pan)) {
            error += "<a href='#pan_id'>2.9 Special characters are not allowed in PAN ID </a><br>";
        } else {
            error += length(pan.length, 'pan_id', '2.9', ' PAN ID', 10)
        }
    }
    //voterid
    if (voter != "") {
        if (special.test(voter)) {
            error += "<a href='#voter_id'>2.10 Special characters are not allowed in Voter ID </a><br>";
        } else {
            error += length(voter.length, 'voter_id', '2.10', ' Voter ID', 10)
        }
    }

    //Employment type
    if (emp_type == null) {
        error += "<a href='#emp_type1'>2.11 Please select Employment Type </a><br>";
    } else if (emp_org_name == "" && (emp_type.value == 1 || emp_type.value == 2 || emp_type.value == 3)) {
        error += "<a href='#emp_org_name'>2.12 Please Enter Organization name</a><br>";
    }
    if (emp_org_name !== "") {
        if (special_num.test(emp_org_name)) {
            error += "<a href='#emp_org_name'>2.12 Special characters are not allowed in Organization name</a><br>"
        } else {
            error += length(emp_org_name.length, 'emp_org_name', '2.12', ' Employment Orgaization', 6)
        }
        error += length(emp_org_name.length, 'emp_org_name', '2.12', ' Employment Orgaization', 6)
    }

    //checking gov. servant or not
    if (gov_servant == null) {
        error += "<a href='#gov_servant1'>2.13 " + yn + "</a><br>";
    }
    //Education Qualification
    if (education == null) {
        error += "<a href='#edu_qualification1'>2.14 Please select Education Qualification</a><br>";
    }
    //checking non ecr or not
    if (non_ecr == null) {
        error += "<a href='#non_ecr1'>2.15 " + yn + "</a><br>";
    }

    //aadhar
    if (aadhar == "") {
        error += "<a href='#aadhar'>2.17 Please enter AadharCard Number</a><br>";
    } else if (isNaN(aadhar) || special.test(aadhar)) {
        error += "<a href='#aadhar'>2.17 AadharCard Number only allowed Digits </a><br>";
    } else {
        error += length(aadhar.length, 'aadhar', '2.17', ' Aadhar Number', 12);
    }

    //--------------------3------------------------//
    //father
    if (father == "") {
        error += "<a href='#father_name'>3.1 Please enter Father Name</a><br>";
    } else if (special_num.test(father)) {
        error += "<a href='#father_name'>3.1 Father name only allowed Alphabets</a><br>";
    }
    //father middle
    if (father_middle != "" && special_num.test(father_middle)) {
        error += "<a href='#father_middle_name'>3.1 Father Middle Name should have only alphabets</a><br>";
    }
    //father surname
    if (father_surname == "") {
        error += "<a href='#father_surname'>3.1 Please enter Father surname</a><br>";
    } else if (special_num.test(father_surname)) {
        error += "<a href='#father_surname'>3.1 Father surname only allowed Alphabets</a><br>";
    }

    //mother
    if (mother == "") {
        error += "<a href='#mother_name'>3.2 Please enter Mother Name</a><br>";
    } else if (special_num.test(mother)) {
        error += "<a href='#mother_name'>3.2 Mother name only allowed Alphabets</a><br>";
    }
    //mother middle
    if (mother_middle != "" && special_num.test(mother_middle)) {
        error += "<a href='#mother_middle_name'>3.2 Mother Middle Name should have only alphabets</a><br>";
    }
    //mother surname
    if (mother_surname == "") {
        error += "<a href='#mother_surname'>3.2 Please enter Mother surname</a><br>";
    } else if (special_num.test(mother_surname)) {
        error += "<a href='#mother_surname'>3.2 Mother surname only allowed Alphabets</a><br>";
    }

    //Guardian
    if (guardian != "" && special_num.test(guardian)) {
        error += "<a href='#guardian_name'>3.3 Guardian name should have only alphabets</a><br>";
    }
    if (guardian_middle != "" && special_num.test(guardian_middle)) {
        error += "<a href='#guardian_middle_name'>3.3 Guardian middle name should have only alphabets</a><br>";
    }
    if (guardian_surname != "" && special_num.test(guardian_surname)) {
        error += "<a href='#guardian_surname_name'>3.3 Guardian surname should have only alphabets</a><br>";
    }

    //Spouse
    if (spouse != "" && special_num.test(spouse)) {
        error += "<a href='#spouse_name'>3.4 Spouse name should have only alphabets</a><br>";
    }
    if (spouse_middle != "" && special_num.test(guardian_middle)) {
        error += "<a href='#spouse_middle_name'>3.4 Spouse middle name should have only alphabets</a><br>";
    }
    if (spouse_surname != "" && special_num.test(spouse_surname)) {
        error += "<a href='#spouse_surname_name'>3.4 Spouse surname should have only alphabets</a><br>";
    }

    //3.5 minor parents 
    if (birth != "" && ageCalculator(birth) < 18) {
        if (father_pass == "") {
            error += "<a href='#father_passport_no'>3.5 Please Select Father/Legal Guardian's Passport Number or File Number</a><br>"
        } else if (father_pass != "") {
            if (pass_file == null) {
                error += "<a href='#pass_file1'>3.5 Please Select Passport Number or File Number</a><br>"
            } else if (isNaN(father_pass) || special.test(father_pass)) {
                error += "<a href='#father_passport_no'>3.5 Father's Passport Number only allowed Digits</a><br>";
            } else if (pass_file.value == 1) {
                error += length(father_pass.length, 'father_passport_no', '3.5', " Father's passport Number", 8)
            } else if (pass_file.value == 2) {
                error += length(father_pass.length, 'father_passport_no', '3.5', " Father's file Number", 12)
            }
        }

        if (mother_pass != "") {
            if (pass_file == null) {
                error += "<a href='#pass_file'>3.5 Please Select Passport Number or File Number</a><br>"
            } else if (isNaN(mother_pass) || special.test(father_pass)) {
                error += "<a href='#mother_passport_no'>3.5 Mother's Passport Number only allowed Digits</a><br>";
            } else if (pass_file.value == 1) {
                error += length(mother_pass.length, 'mother_passport_no', '3.5', " Mother's passport Number", 8)
            } else if (mother_pass != "" && pass_file.value == 2) {
                error += length(mother_pass.length, 'mother_passport_no', '3.5', " Mother's file Number", 12)
            }
        }
    }

    //-----------------------4---------------------------//
    //street
    if (street == "") {
        error += "<a href='#street'>4.1 Please enter House No. and Street name</a><br>";
    } else if (add_format.test(street)) {
        error += "<a href='#street'>4.1 Give valid House Number and Street</a><br>";
    } else if (street.length < 10) {
        error += "<a href='#street'>4.1 House No. and Street name should have atleast 10 characters</a><br>";
    }

    //town
    if (town == "") {
        error += "<a href='#town'>4.1 Please enter Village/City/Town </a><br>";
    } else if (special_num.test(town)) {
        error += "<a href='#town'>4.1 Village/City/Town is only allowed Alphabets</a><br>";
    }

    //district
    if (district == "") {
        error += "<a href='#district'>4.1 Please enter District </a><br>";
    } else if (special_num.test(district)) {
        error += "<a href='#town'>4.1 District is only allowed Alphabets</a><br>";
    }

    //police
    if (police == "") {
        error += "<a href='#police_station'>4.1 Please enter nearest Police Station location</a><br>";
    } else if (special_num.test(police)) {
        error += "<a href='#town'>4.1 Police Office is only allowed Alphabets</a><br>";
    }

    //state
    if (state == "") {
        error += "<a href='#state'>4.1 Please enter State/UT </a><br>";
    } else if (special_num.test(state)) {
        error += "<a href='#town'>4.1 State/UT is only allowed Alphabets</a><br>";
    }

    //pin
    if (pin == "") {
        error += "<a href='#pin'>4.1 Please enter PIN code </a><br>";
    } else if (isNaN(pin) || special.test(pin)) {
        error += "<a href='#pin'>4.1 PIN should be Numbers</a><br>";
    } else {
        error += length(pin.length, 'pin', '4.1', ' PIN', 6);
    }


    //mobile
    if (mobile == "") {
        error += "<a href='#mobile_no'>4.1 Please enter your Mobile Number </a><br>";
    } else if (isNaN(mobile) || special.test(mobile)) {
        error += "<a href='#mobile_no'>4.1 Mobile number should be Numbers</a><br>"
    } else {
        error += length(mobile.length, 'mobile_no', '4.1', ' Mobile Number', 10)
    }


    //email
    if (email == "") {
        error += "<a href='#email'>4.1 Please enter your Email ID </a><br>";
    } else if (!email_format.test(email)) {
        error += "<a href='#email'>4.1 Enter Validate email id</a><br>";
    }


    //same address or not
    if (same_add == null) {
        error += "<a href='#same_add1'>4.2 " + yn + "</a><br>";
    } else if (same_add.value == 2) {

        //------------------------5-------------------------------//
        //emergency name
        if (em_name == "") {
            error += "<a href='#em_name'>5. Please enter Emergency Contact person Name </a><br>";
        } else if (special_num.test(em_name)) {
            error += "<a href='#em_name'>5. Please enter only alphabets Emergency Contact person Name </a><br>";
        }

        //emergency address
        if (em_address == "") {
            error += "<a href='#em_address'>5. Please enter Emergency Contact person Address </a><br>";
        } else if (add_format.test(em_address)) {
            error += "<a href='#em_address'>5. Give valid Emergency Contact person Address</a><br>";
        }

        //emergency email-id
        if (em_email == "") {
            error += "<a href='#em_email'>5. Please enter Emergency Contact person Email ID </a><br>"
        } else if (email_format.test(email)) {
            error += "<a href='#email'>4.1 Enter Validate Emergency Contact person Email ID</a><br>";
        }
    }


    //---------------------6---------------------------------//
    if (applying != null) {
        if (applying.value == 2) {
            //certi no
            if (certi_no == "") {
                error += "<a href='#certi_no'>6.1 Please Enter Passport/Identity Certificate Number</a><br>"
            } else if (isNaN(certi_no) || special.test(certi_no)) {
                error += "<a href='#certi_no'>6.1 Passport/Identity Certificate Number only allowed Numbers</a><br>"
            } else {
                error += length(certi_no.length, 'certi_no', '6.1', ' Passport/Identity Certificate Number', 8);
            }

            //issue date
            if (issue_date == "") {
                error += "<a href='#issue_date'>6.1 Please Specify Issue date of previous Passport</a><br>"
            } else if (new Date(issue_date) > today) {
                error += "<a href='#issue_date'>6.1 Issue date can't be in future</a><br>"
            }

            //expiry date
            if (expiry_date == "") {
                error += "<a href='#expiry_date'>6.1 Please Specify Expiry date of previous Passport</a><br>"
            } else if (issue_date != "" && (new Date(expiry_date) < new Date(issue_date))) {
                error += "<a href='#expiry_date'>6.1 Expiry Date can't be before Issue Date</a><br>"
            }

            //issue place
            if (issue_place == "") {
                error += "<a href='#issue_place'>6.1 Please Enter Place of Issue</a><br>"
            } else if (special_num.test(issue_place)) {
                error += "<a href='#issue_place'>6.1 Issue Place only allowed Alphabets.</a><br>"
            }

            //issued
            if (not_issued == null) {
                error += "<a href='#not_issued_pass1'>6.2 " + yn + "</a><br>"
            } else if (not_issued.value == '1') {
                if (file_6 == "") {
                    error += "<a href='#file_no'>6.2. Please enter File Number </a><br>"
                } else if (isNaN(file_6) || special.test(file_6)) {
                    error += "<a href='#file_no'>6.2 File Number is only allowed in Numbers</a><br>";
                } else {
                    error += length(file_6.length, 'file_no', '6.2', ' File Number', 12)
                }

                //month-year
                if (month_year == "") {
                    error += "<a href='#month_year'>6.2. Please Specify Month & Year </a><br>"
                } else if (special.test(month_year)) {
                    error += "<a href='#month_year'>6.2 Month & year not allowed special characters</a><br>"
                }
                //office
                if (office == "") {
                    error += "<a href='#pass_office'>6.2. Please Enter Name of Passport office </a><br>"
                } else if (special_num.test(office)) {
                    error += "<a href='#pass_office'>6.2. Name of Passport office only allowed alphabets</a><br>"
                }
            }

        }
    }

    //---------------------7---------------------------------//
    //other details 1 to 15
    if (od1 == null) {
        error += "<a href='#od1'>7.1.1 " + yn + "</a><br>"
    }
    if (od2 == null) {
        error += "<a href='#od2'>7.1.2 " + yn + "</a><br>"
    }
    if (od3 == null) {
        error += "<a href='#od3'>7.1.3 " + yn + "</a><br>"
    }
    if (od4 == null) {
        error += "<a href='#od4'>7.1.4 " + yn + "</a><br>"
    }
    if (od5 == null) {
        error += "<a href='#od5'>7.2.1 " + yn + "</a><br>"
    }
    if (od6 == null) {
        error += "<a href='#od6'>7.3.1 " + yn + "</a><br>"
    }
    if (od7 == null) {
        error += "<a href='#od7'>7.3.2 " + yn + "</a><br>"
    }
    if (od8 == null) {
        error += "<a href='#od8'>7.3.3 " + yn + "</a><br>"
    }
    if (od9 == null) {
        error += "<a href='#od9'>7.4.1 " + yn + "</a><br>"
    }
    if (od10 == null) {
        error += "<a href='#od10'>7.4.2 " + yn + "</a><br>"
    }
    if (od11 == null) {
        error += "<a href='#od11'>7.4.3 " + yn + "</a><br>"
    }
    if (od12 == null) {
        error += "<a href='#od12'>7.4.4 " + yn + "</a><br>"
    }
    if (od13 == null) {
        error += "<a href='#od13'>7.5.1 " + yn + "</a><br>"
    }

    if (od14 == null) {
        error += "<a href='#od14'>7.5.2 " + yn + "</a><br>"
    } else if (od14.value == 1) {
        od14_sub = document.querySelector('input[name=od14_sub]:checked')
        if (od14_sub == null) {
            error += "<a href='#subbtn_14'>7.5.2 " + yn + "</a><br>"
        }
    }

    if (od15 == null) {
        error += "<a href='#od15'>7.5.3 " + yn + "</a><br>"
    } else if (od15.value == 1) {
        od15_sub = document.querySelector('input[name=od15_sub]:checked')
        if (od15_sub == null) {
            error += "<a href='#subbtn_15'>7.5.3 " + yn + "</a><br>"
        }
    }

    //--------------------8---------------------//
    //fee
    if (fee == "") {
        error += "<a href='#fee'>8.1 Please enter Fee Amount</a><br>"
    } else if (isNaN(fee)) {
        error += "<a href='#fee'>8.1 Please enter Fee Amount in Numbers or decimal</a><br>"
    }

    //dd
    if (dd == "") {
        error += "<a href='#dd_num'>8.2 Please Enter DD Number</a><br>"
    } else if (isNaN(dd) || special.test(dd)) {
        error += "<a href='#dd_num'>8.2 DD Number only allowed Numbers</a><br>"
    } else {
        error += length(dd.length, 'dd_num', '8.2', ' DD Number', 6)
    }

    //dd issue
    if (dd_issue_date == "") {
        error += "<a href='#dd_issue_date'>8.2 Please Specify Issue Date</a><br>"
    } else if (new Date(dd_issue_date) >= today) {
        error += "<a href='#dd_issue_date'>8.2 Issue Date Can't be in future</a><br>"
    }

    // dd exp
    if (dd_exp_date == "") {
        error += "<a href='#dd_exp_date'>8.2 Please Specify Expiry Date</a><br>"
    } else if (dd_issue_date != "" && (new Date(dd_exp_date) <= new Date(dd_issue_date))) {
        error += "<a href='#dd_exp_date'>8.2 Expiry Date Can't be before Issue Date</a><br>"
    }

    //bank
    if (bank == "") {
        error += "<a href='#bank_name'>8.2 Please Enter Bank Name</a><br>"
    } else if (special_num.test(bank)) {
        error += "<a href='#bank_name'>8.2 Bank Name is only allowed Alphabets</a><br>"
    }

    //branch
    if (branch == "") {
        error += "<a href='#branch'>8.2 Please Enter Branch Name</a><br>"
    } else if (special_num.test(branch)) {
        error += "<a href='#branch'>8.2 Branch Name is only allowed Alphabets</a><br>"
    }

    //----------------------9-----------------------------//
    if (en_file == "") {
        error += "<a href='#en_file'>9. Please Choose atLeast one enclouser</a><br>";
    } else if (!re.exec(en_file)) {
        error += "<a href='#en_file'>9. Choose SEnclousers in only .png/.jpg/.jpeg/.pdf type</a><br>";
    }
    //----------------------10---------------declaration place---//

    if (sd_place == "") {
        error += "<a href='#sd_place'>10. Please enter Declaration Place</a><br>";
    } else if (special_num.test(sd_place)) {
        error += "<a href='#sd_place'>10. Declaration place only allowed Alphabets</a><br>";
    }

    //declaration date
    if (sd_date == "") {
        error += "<a href='#sd_date'>10. Please specify Declaration Date</a><br>";
    }

    //sign
    if (sd_sign == "") {
        error += "<a href='#sd_sign'>10. Please Choose Declaration Signature</a><br>";
    } else if (!re.exec(sd_sign)) {
        error += "<a href='#sd_sign'>10. Choose Sign in only .png/.jpg/.jpeg/.pdf type</a><br>";
    }
    if (error == "") {
        return true
    } else {
        document.getElementById('error').innerHTML = error
        document.getElementById('error').focus();
        return false
    }





}

function length(inputL, link, errorNo, field, length) {
    if (inputL != length) {
        return ("<a href='#" + link + "'> " + errorNo + field + " should be " + length + " length </a><br>");
    } else {
        return "";
    }
}

function ageCalculator(userinput) {

    let birth = new Date(userinput)
    let today = new Date()
    today_year = today.getFullYear()
    birth_year = birth.getFullYear()
    if (today.getMonth() > birth.getMonth()) {
        age = today_year - birth_year;
    } else if (today.getMonth() == birth.getMonth()) {
        if (today.getDate() >= birth.getDate()) {
            age = today_year - birth_year
        } else {
            age = today_year - birth_year - 1
        }
    } else {
        age = today_year - birth_year - 1
    }
    return age
}

function enableReason(reason) {
    for (let i = 0; i < reason.length; i++) {
        reason[i].disabled = false;
    }
}

function disableReason(reason) {
    for (let i = 0; i < reason.length; i++) {
        reason[i].disabled = true;
    }
}

function enableOther() {
    document.getElementById('other_reason1').disabled = false;
    document.getElementById('other_reason2').disabled = false;
}

function disableOther() {
    document.getElementById('other_reason1').disabled = true;
    document.getElementById('other_reason2').disabled = true;
}

function enablePrevious() {
    document.getElementById('certi_no').disabled = false;
    document.getElementById('issue_date').disabled = false;
    document.getElementById('expiry_date').disabled = false;
    document.getElementById('issue_place').disabled = false;
    enableReason(document.forms['form']['not_issued_pass'])
}

function disablePrevious() {
    document.getElementById('certi_no').disabled = true;
    document.getElementById('issue_date').disabled = true;
    document.getElementById('expiry_date').disabled = true;
    document.getElementById('issue_place').disabled = true;
    disableReason(document.forms['form']['not_issued_pass'])
}


function Reason() {
    let applying = document.querySelector('input[name=applying]:checked').value;
    let re_reason = document.forms['form']['re_reason']
    let ex_reason = document.forms['form']['ex_reason']
    if (applying == 1) {
        disableReason(re_reason);
        disableReason(ex_reason);
        disableOther();
        disablePrevious();
    } else {
        enableReason(re_reason)
        enablePrevious();
        let re_value = document.querySelector('input[name=re_reason]:checked').value
        if (document.getElementById('ex_reason9').checked == true) {
            enableOther()
        }
        if (re_value == 3) {
            enableReason(ex_reason)
        } else {
            disableReason(ex_reason)
            disableOther();
        }


    }
}

function other() {
    other1 = document.getElementById('other_reason1')
    other2 = document.getElementById('other_reason2')
    if (other1.disabled == true && other2.disabled == true) {
        enableOther()
    } else {
        disableOther()
    }
}

function emp_org() {

    query = document.querySelector('input[name=emp_type]:checked').value
    if (query == 1 || query == 2 || query == 3) {
        document.getElementById('emp_org_name').disabled = false;
        document.getElementById('emp_org_name').focus()
    } else {
        document.getElementById('emp_org_name').disabled = true;
    }
}

function address() {
    query = document.querySelector('input[name=same_add]:checked')
    if (query.value == 1) {
        document.getElementById('em_name').disabled = true
        document.getElementById('em_address').disabled = true
        document.getElementById('em_email').disabled = true
    } else if (query.value == 2) {
        document.getElementById('em_name').disabled = false
        document.getElementById('em_address').disabled = false
        document.getElementById('em_email').disabled = false

    }
}

function notIssued() {
    query = document.querySelector('input[name=not_issued_pass]:checked').value
    fileNo = document.getElementById('file_no')
    month_year = document.getElementById('month_year')
    office = document.getElementById('pass_office')
    if (query == '1') {
        fileNo.disabled = false
        month_year.disabled = false
        office.disabled = false
    } else {
        fileNo.disabled = true
        month_year.disabled = true
        office.disabled = true
    }

}

function sub14() {
    od14 = document.querySelector('input[name=od14]:checked')

    if (od14.value == 1) {
        document.getElementById('subbtn_14').style.visibility = "visible"
    } else if (od14.value == 2) {
        document.getElementById('subbtn_14').style.visibility = "hidden"
    }
}

function sub15() {
    od15 = document.querySelector('input[name=od15]:checked')

    if (od15.value == 1) {
        document.getElementById('subbtn_15').style.visibility = "visible"
    } else if (od15.value == 2) {
        document.getElementById('subbtn_15').style.visibility = "hidden"
    }
}

function chooseCountry() {
    selection = document.querySelector('input[name=country_select]:checked')
    let birth_place = document.getElementById("birth_place")
    let birth_district = document.getElementById("birth_district")
    let birth_state = document.getElementById("birth_state")
    let country = document.getElementById('country')
    if (selection.value == 1) {
        birth_place.disabled = false
        birth_district.disabled = false
        birth_state.disabled = false
        country.disabled = true
    } else if (selection.value == 2) {
        birth_place.disabled = true
        birth_district.disabled = true
        birth_state.disabled = true
        country.disabled = false
    }

}

function setDate() {
    today = new Date()
    document.getElementById('sd_date').value = today.getDate() + "-" + today.getMonth() + 1 + "-" + today.getFullYear()
}