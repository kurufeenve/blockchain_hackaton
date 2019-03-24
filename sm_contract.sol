pragma solidity 0.4.25;

contract Certifier {
    
    event GetLicense(string city_from, string city_to);
    
    uint public cert_count;

    struct Certificat{
        string  name_surname;
        string city_from;
        string city_to;
        string  car_number;
        string  license_id;
    }
    
    mapping (uint => Certificat) links;
    
    constructor() public {
        cert_count = 0;
    }
    
    function add_certificat(string ns, string cf, string ct, string cn, string li) public {
        links[cert_count++] = Certificat({name_surname: ns, city_from: cf, city_to: ct, car_number: cn, license_id: li});
    }
    
    function get_certificat(string cn) public view returns (uint cert_id, string ns, string li, string cf, string ct) {
        for (uint i = 0; i < cert_count; i++) {
            if (compareStrings(links[i].car_number, cn)) {
                return (i, links[i].name_surname, links[i].license_id, links[i].city_from, links[i].city_to);
            }
        }
    }
    
   function compareStrings (string memory a, string memory b) public view returns (bool) {
       return keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b)));
   } 
    
}
