const fs=require("fs");
let inputArr=process.argv.slice(2);
//console.log(inputArr);
 let optionsArr=[];
 let filesArr=[];
 for(let i=0;i<inputArr.length;i++)
 {
     if(inputArr[i].charAt(0)=="-")
     optionsArr.push(inputArr[i]);
else
filesArr.push(inputArr[i]);
 }
 let isBothPresent=optionsArr.includes("-n")&&optionsArr.includes("-b")
 if(isBothPresent)
 {console.log("please enter either -n or -b");
 return ;}
 for(let i=0;i<filesArr.length;i++)
 {
    // comment
let isFileExist=fs.existsSync(filesArr[i]);
     if(isFileExist==false)
  {   console.log(`file ${filesArr[i]} is not exist `)
     return ;}
 }

    // wcat filename1 filename2 filename3 path display content of  all file
 let content=""; 
 for(let i=0;i<filesArr.length;i++)
 {
    
     //console.log(`file ${filesArr[i]} is not exist `)
     let bufferContent=fs.readFileSync(filesArr[i]);
     content+=bufferContent+"\r\n";
 }
 //console.log(content);
 let contentArr=content.split("\r\n");
// -s convert biglines break into single line break
 let isSPresent=optionsArr.includes("-s")
 if(isSPresent==true)
 {
     for(let i=1;i<contentArr.length;i++)
     {
         if(contentArr[i]==""&&contentArr[i-1]=="")
         {
             contentArr[i]=null;
         }
         else if(contentArr[i]==""&&contentArr[i-1]==null)
        { contentArr[i]=null;}
     }
     let tempArr=[];
     for(let i=0;i<contentArr.length;i++)
     {
         if(contentArr[i]!=null)
         {
tempArr.push(contentArr[i])
         }
     }
     contentArr=tempArr;

 }
 //console.log("-------------------");
//  console.log(contentArr.join("\n"));
// -n give numbering to all the lines
let isNPresent=optionsArr.includes("-n");
if(isNPresent==true)
{
    for(let i=0;i<contentArr.length;i++)
    {
        contentArr[i]=`${i+1} ${contentArr[i]}`;
        //hello 
    }
}
///console.log(contentArr.join("\n"));
// give -b numbers to non empty lines
//check git
let isBPresent=optionsArr.includes("-b");
if(isBPresent==true)
{ let count=1;
    for(let i=0;i<contentArr.length;i++)
    {
       
        if(contentArr[i]!="")
        {contentArr[i]=`${count} ${contentArr[i]}`;
        count++;
    }
    }
}
console.log(contentArr.join("\n"));

// wcat filename1 > filename2 =>puts all content of file1 to file2(overriding) if exist and if not then create it and then copied the content in it
// wcat filename1>> filename2 =>append all content of file1 to file2
//node wcat -s filename>filename2=>get the file content of filename remove large spaces and save the output in filename2