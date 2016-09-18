var  chemicals=[
{
"chemicalname":"Aceclofenac + Paracetamol + Rabeprazole",
"date":"update as of march 15th,2016",
"desc":"This combination of chemicals is banned by the govt. of INDIA",
"source":"http://www.nhp.gov.in/Complete-list-of-344-drugs-banned-by-the-Ministry-of-Health-Family-welfare_pg"
},
{
"chemicalname":"Nimesulide + Diclofenac"
},
{
"chemicalname":"Nimesulide + Cetirizine + Caffeine"
},
{
"chemicalname":"Nimesulide + Tizanidine"
},
{
"chemicalname":"Paracetamol + Cetirizine + Caffeine"
},
{
"chemicalname":"Diclofenac + Tramadol + Chlorzoxazone"
},
{
"chemicalname":"Dicyclomine + Paracetamol + Domperidone"
},
{
"chemicalname":"Nimesulide + Paracetamol dispersible tablets"
},
{
"chemicalname":"Paracetamol + Phenylephrine + Caffeine"
},{
"chemicalname":"Diclofenac + Tramadol + Paracetamol"
},
{
"chemicalname":" Diclofenac + Paracetamol + Chlorzoxazone + Famotidine"
},{
"chemicalname":"Naproxen + Paracetamol"
},
{
"chemicalname":"Nimesulide + Serratiopeptidase"
},
{
"chemicalname":"Paracetamol + Diclofenac + Famotidine"
},
{
"chemicalname":"Nimesulide + Pitofenone + Fenpiverinium + Benzyl Alcohol"
},
{
"chemicalname":"Omeprazole + Paracetamol + Diclofenac"
},{
"chemicalname":"Nimesulide + Paracetamol injection"
},
{
"chemicalname":"Tamsulosin + Diclofenac"
},
{
"chemicalname":"Paracetamol + Phenylephrine + Chlorpheniramine + Dextromethorphan + Caffeine"
},
{
"chemicalname":"Diclofenac + Zinc Carnosine"
},
{
"chemicalname":"Diclofenac + Paracetamol + Chlorpheniramine Maleate + Magnesium Trisillicate"
},{
"chemicalname":"Paracetamol + Pseudoephedrine + Cetrizine"
},
{
"chemicalname":"Phenylbutazone + Sodium Salicylate"
},
{
"chemicalname":" Lornoxicam + Paracetamol + Trypsin"
},
{
"chemicalname":"Paracetamol + Mefenamic Acid + Ranitidine + Dicyclomine"
},
{
"chemicalname":"Nimesulide + Dicyclomine"
},
{
"chemicalname":" Heparin + Diclofenac"
},
{
"chemicalname":"Glucosamine + Methyl Sulfonyl Methane + Vitamin D3 + Manganese + Boron + Copper + Zinc"
},
{
"chemicalname":"Paracetamol + Tapentadol"
},
{
"chemicalname":"Tranexamic Acid + Proanthocyanidin"
},
{
"chemicalname":"Benzoxonium Chloride + Lidocaine"
},
{
"chemicalname":"Lornoxicam + Paracetamol + Tramadol"
},
{
"chemicalname":"Lornoxicam + Paracetamol + Serratiopeptidase"
},
{
"chemicalname":"Diclofenac + Paracetamol + Magnesium Trisilicate"
},
{
"chemicalname":"Paracetamol + Domperidone + Caffeine"
},
{
"chemicalname":"Ammonium Chloride + Sodium Citrate + Chlorpheniramine Maleate + Menthol"
},
{
"chemicalname":"Paracetamol + Prochlorperazine Maleate"
},
{
"chemicalname":"Serratiopeptidase (enteric coated 20000 units) + Diclofenac Potassium & 2 tablets of Doxycycline"
},
{
"chemicalname":"Nimesulide + Paracetamol Suspension"
},
{
"chemicalname":"Aceclofenac + Paracetamol + Famotidine"
},
{
"chemicalname":"Aceclofenac + Zinc Carnosine"
},
{
"chemicalname":"Paracetamol + Disodium Hydrogen Citrate + Caffeine"
},
{
"chemicalname":"Paracetamol + DL Methionine"
},
{
"chemicalname":"Disodium Hydrogen Citrate + Paracetamol"
},
{
"chemicalname":"Paracetamol + Caffeine + Codeine"
},
{
"chemicalname":"Aceclofenac (SR) + Paracetamol"
},
{
"chemicalname":"Diclofenac + Paracetamol injection"
},
{
"chemicalname":"Azithromycin + Cefixime"
},
{
"chemicalname":"Amoxicillin + Dicloxacillin"
},
{
"chemicalname":"Amoxicillin 250 mg + Potassium Clavulanate Diluted 62.5 mg"
},
{
"chemicalname":"Azithromycin + Levofloxacin"
},
{
"chemicalname":"Cefixime + Linezolid"
},
{
"chemicalname":"Amoxicillin + Cefixime + Potassium Clavulanic Acid"
},
{
"chemicalname":"Ofloxacin + Nitazoxanide"
},
{
"chemicalname":"Cefpodoxime Proxetil + Levofloxacin"
},
{
"chemicalname":"Secnidazole and Fluconazole"
},
{
"chemicalname":" Levofloxacin + Ornidazole + Alpha Tocopherol Acetate"
},
{
"chemicalname":"Nimorazole + Ofloxacin"
},
{
"chemicalname":"Azithromycin + Ofloxacin"
},
{
"chemicalname":"Amoxycillin + Tinidazole"
},
{
"chemicalname":"Doxycycline + Serratiopeptidase"
},
{
"chemicalname":"Cefixime + Levofloxacin"
}
];

window.onload = function what() {
    myFunc(chemicals);

    function myFunc(arr) {
        var out = "";
        var out1 = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<a href="' + arr[0].source + '">' +
                arr[i].chemicalname + '</a><br>' + arr[0].desc + '<br>' + arr[0].date + '<br>';
            // out1 +: arr[i].description;
        }
        document.getElementById("divshow").innerHTML = out;
        
    }
}







