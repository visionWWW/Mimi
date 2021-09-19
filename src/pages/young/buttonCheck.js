import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const buttonCheck = () =>{
    function checkRadioButton(objName){
        var radioObj = document.all(objName);
        var isChecked;
        if(radioObj.length == null){
            isChecked = radioObj.checked;
        }else{
            for(var i=0; i<radioObj.length; i++){
                if(radioObj[i].checked){
                    isChecked = true; break;
                }
            }
        }
        if(isChecked) alert('체크된거있음');
    
    }
}

export default buttonCheck;