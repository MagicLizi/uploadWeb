import React from 'react';
import { connect } from 'dva';
const FileUpload = require('react-fileupload');
import IndexCSS from './IndexPage.css';
class IndexPage extends React.Component{
  render(){
    var options={
      baseUrl:'http://127.0.0.1:7777/upload',
      chooseAndUpload:true,
      fileFieldName:'userCre',
      doUpload : function(files,mill){
        console.log('you just uploaded',typeof files == 'string' ? files : files[0].name)
      },
      uploading : function(progress){
        console.log('loading...',progress.loaded/progress.total+'%')
      },
      uploadSuccess : function(resp){
        console.log('upload success..!');
        alert(`上传成功！文件地址为${resp.fileUrl}`)
      },
      uploadError : function(err){
        alert(err.message)
      },
      uploadFail : function(resp){
        alert(resp)
      }
    }
    return (
      <div className = {IndexCSS['container']}>
        <FileUpload options={options}>
          <button className = {IndexCSS['btn']} ref="chooseAndUpload">点击上传文件</button>
        </FileUpload>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
