import{j as jsxRuntimeExports,r as reset,R as React,c as connect,a as addPost,d as deletePost$1,b as addLikesToPost,e as reactExports,f as classNames,P as Preloader,u as useLocation,g as useParams,N as Navigate,h as compose,i as getUserProfile,k as getUserStatus,l as getUpdateUserStatus,m as getUpdateUserProfile,n as getUserPhotoUpdate,o as getLogoutFromSystem}from"./index-09a0cad3.js";import{r as reduxForm,F as Field,a as FormElement,b as required,S as SubmitButton,c as createField,m as maxLengthCreator}from"./CreateField-fe78bcab.js";import{d as defaultUserImg}from"./default-user-img-4a80a368.js";const newPostTextWrapper="_newPostTextWrapper_1rxl2_1",newPostText="_newPostText_1rxl2_1",cl$8={newPostTextWrapper,newPostText},AddPostForm=t=>jsxRuntimeExports.jsx("form",{onSubmit:t.handleSubmit,children:jsxRuntimeExports.jsxs("div",{className:cl$8.newPostTextWrapper,children:[jsxRuntimeExports.jsx(Field,{component:FormElement,element_type:"textarea",className:cl$8.newPostText,name:"newPostMessageText",placeholder:"Your post...",validate:[required]}),jsxRuntimeExports.jsx(SubmitButton,{name:"Add Post"})]})}),afterSubmit=(t,s)=>s(reset("posts")),AddPostReduxForm=reduxForm({form:"posts",onSubmitSuccess:afterSubmit})(AddPostForm),AddPost=t=>{const s=r=>{const e=r.newPostMessageText;t.addPost(e)};return jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(AddPostReduxForm,{onSubmit:s})})};class AddPostContainer extends React.Component{componentDidMount(){}render(){return jsxRuntimeExports.jsx(AddPost,{...this.props})}}const mapStateToProps$3=t=>({posts:t.profilePage.posts,newPostMessageText:t.profilePage.newPostMessage}),AddPostContainer$1=connect(mapStateToProps$3,{addPost})(AddPostContainer),MyPosts_module={},postWrapper="_postWrapper_vut14_1",post="_post_vut14_1",likes="_likes_vut14_21",deletePost="_deletePost_vut14_40",cl$7={postWrapper,post,likes,deletePost},heart="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGklEQVR4nO2Z6W8cRRDF2wniElcACQVZtnem3qveQRZCDqAghGVQOIMDISbY5iYc4QwxAScOhHAk4TAJhDOcfyqqZAZNZmZ3Z2dnbAft++L9YPXW619VdXWvc0MNNdT/XiPe+61hGG4HsBvA86r6Bsl9AJ5R1ZkgCMb6XTMMQxGRpwB8AOAkyR/sL4Ajqjrnvaf930CRq+qtYRjOqurLJF8B8CqA10nuJ/kWgHdU9T2S7wN4kWSrxJoKYInkNwBWAZwm+T3JswB+AvAzyV9JniP5Sbvdvq1K7CNBEGwj+ZztuAUXm7Bdfy0m8CaAtwG8S/IAyYO2m977Hc65zdkFp6enL1PVWZInAJwi+TXJbwF8B+CMEUhMkPyF5G8Afgfwp6ouFK3ZMXgA94nIgqouxiZeUNWXSlBYAnDIUiPzhZtFZFFEPif5ZZwqX2UonDcB4Mc0BQB/kPzLNqmUCRG5g+Rey28zQfLZfimQ/FBVH0rWBPAYgE8BfEbyi4SCiCQUcqmUpUDyb9vQrsG3Wq1bRGSPFVFsYj5NQURKUyD5EYDAipXkxySPATieoXAqnUolKPwThmHHmhgheb91GlXdQ/LpQSmkzB61gsxQ6JRKXSnYJhR2J5I3k9wF4EnL4RopHAawkqaQTSUWFHQ3CtbJcgYMTdwlnuiHgoj0orBsvT2hkJgg2a2ge1GYLyJwr6o+3iQFVS1KpRMVKBwrMvCAiOxskEIulViSAoDsuXA6Z8DanrW7OiiISJrCRalUE4VzRQZmADxaM4WeBc1qFFZzBrz320k+YhREZGAK3Qq6BgpHcwZarRZJPlwHhX7bKvukYPHkDIyNjW2xOhiUQonD7aK2igoU4lE7LwB3d6JgI0YPCgMdbixP4XDHe4L3/qYqFCqMGJUokDxL0hcGX6YWiihUGbc7UZDu47ZR2OVKaERVt5WhMOCg1w+FVRHZ75zbVMbA+duTtdVuFJoa9CRPwUwcHB0dvcr1oyiKLrebWQcKdY3byz0onBQRuxxd66pofHz8SjuhUxTWZNyWCxTMxPLk5OSWSsGnSFwjIg82POgdyVA4rqor9pwzUPApEjdYZ2p63OYFCmZiZWJiYtzVKbuxWVE3PW6r6kq73YZrQvbQ5b3fWfO4fSiTSrc3EnzKxETNFJZUNUmlu9xayI7zmigcSFLJWrZbSxnqASn8V9B26rt1kL0j3TnouK2qs6VHhAa0SVXvKTlu7ytIpd1zc3OlH20bUfzqPNOLQsGIsVdErnAbQRaIiOzoQiE7bs9PTU1d7TaSLKD4WSY9bi9mU8nIBEFwvduIEpHr7BedhEI2leyz3frcRlYURTdae82mkgVvz/fuUpD3fmt8NiQFvRBFUb8/BK6vLOAUhdBdilJV7fmKMNRQbl31L0Wv883kxc0SAAAAAElFTkSuQmCC",Post=({postId:t,text:s,likes:r,deletePost:e,photo:o,isOwner:n,addLikesToPost:i})=>{const c=()=>{i(t)};return jsxRuntimeExports.jsxs("div",{className:cl$7.postWrapper,children:[jsxRuntimeExports.jsxs("div",{className:cl$7.post,children:[jsxRuntimeExports.jsx("img",{src:!o||o===null||o===void 0?defaultUserImg:o,alt:"photo"}),jsxRuntimeExports.jsx("p",{children:s})]}),jsxRuntimeExports.jsxs("div",{className:cl$7.likes,onClick:c,children:[n&&jsxRuntimeExports.jsx("span",{onClick:()=>{e(t)},className:cl$7.deletePost,children:"Delete post"}),jsxRuntimeExports.jsx("img",{src:heart,alt:"heart"}),jsxRuntimeExports.jsx("span",{children:r})]})]})},MyPosts=({posts:t,deletePost:s,photo:r,isOwner:e,addLikesToPost:o})=>jsxRuntimeExports.jsxs("div",{children:[e&&jsxRuntimeExports.jsx(AddPostContainer$1,{}),t.map(n=>jsxRuntimeExports.jsx(Post,{postId:n.id,text:n.message,likes:n.likes,deletePost:s,photo:r,isOwner:e,addLikesToPost:o},n.id))]});class MyPostsContainer extends React.Component{componentDidMount(){}render(){return jsxRuntimeExports.jsx(MyPosts,{isOwner:this.props.isOwner,posts:this.props.posts,deletePost:this.props.deletePost,photo:this.props.photo,addLikesToPost:this.props.addLikesToPost})}}const mapStateToProps$2=t=>t.profilePage.userProfile!==null?{posts:t.profilePage.posts,photo:t.profilePage.userProfile.photos.small}:{posts:t.profilePage.posts,photo:null},MyPostsContainer$1=connect(mapStateToProps$2,{deletePost:deletePost$1,addLikesToPost})(MyPostsContainer),myProfileWrapper="_myProfileWrapper_1xc9d_1",cl$6={myProfileWrapper},myProfileInfo="_myProfileInfo_wwtgp_1",infoWrapper="_infoWrapper_wwtgp_7",profileImage="_profileImage_wwtgp_19",photoIcon$1="_photoIcon_wwtgp_37",info1="_info1_wwtgp_63",fullName$1="_fullName_wwtgp_71",status$1="_status_wwtgp_77",info2="_info2_wwtgp_82",cl$5={myProfileInfo,infoWrapper,profileImage,photoIcon:photoIcon$1,info1,fullName:fullName$1,status:status$1,info2},status="_status_1bgzb_1",cl$4={status},EditButton=({goToEditMode:t})=>jsxRuntimeExports.jsx("span",{onClick:t,className:"edit-btn",children:"Edit"}),UserStatus=({userStatus:t,updateStatus:s,isOwner:r})=>{let[e,o]=reactExports.useState(!1),[n,i]=reactExports.useState(t);reactExports.useEffect(()=>{i(t)},[t]);const c=()=>{o(!0)},a=()=>{o(!1),s(n)},l=u=>{i(u.currentTarget.value)};return jsxRuntimeExports.jsxs("div",{className:cl$4.status,children:[!e&&jsxRuntimeExports.jsx("span",{children:t||"No Status"}),e&&jsxRuntimeExports.jsx("input",{value:n,autoFocus:!0,onBlur:a,onChange:l,onKeyDown:u=>{u.key==="Enter"&&a()}}),r&&!e&&jsxRuntimeExports.jsx(EditButton,{goToEditMode:c})]})},aboutWrapper="_aboutWrapper_6atar_1",aboutButton="_aboutButton_6atar_7",aboutButtonDisable="_aboutButtonDisable_6atar_19",aboutInfoWrapper="_aboutInfoWrapper_6atar_23",aboutInfoWrapperActive="_aboutInfoWrapperActive_6atar_36",close="_close_6atar_41",aboutMeInfo="_aboutMeInfo_6atar_61",editAboutButton="_editAboutButton_6atar_117",cl$3={aboutWrapper,aboutButton,aboutButtonDisable,aboutInfoWrapper,aboutInfoWrapperActive,close,aboutMeInfo,editAboutButton},CloseButton=({closeWindow:t})=>jsxRuntimeExports.jsx("span",{onClick:t,className:"close-btn"}),socialForm="_socialForm_2eg8o_1",socials="_socials_2eg8o_6",formSummaryError="_formSummaryError_2eg8o_12",userNameForm="_userNameForm_2eg8o_19",aboutForm="_aboutForm_2eg8o_28",submit="_submit_2eg8o_42",check="_check_2eg8o_46",cl$2={socialForm,socials,formSummaryError,userNameForm,aboutForm,submit,check},EditAboutForm=({handleSubmit:t,closeEditWindow:s})=>jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsxs("form",{onSubmit:t,className:cl$2.aboutForm,children:[jsxRuntimeExports.jsx("div",{className:cl$2.submit,children:jsxRuntimeExports.jsx(CloseButton,{closeWindow:s})}),createField(null,"About me","aboutMe",[],"textarea",{}),jsxRuntimeExports.jsxs("div",{children:[createField(cl$2.check,null,"lookingForAJob",[],"input",{type:"checkbox"},"Looking For A Job ?"),jsxRuntimeExports.jsx("p",{children:"Looking For A Job ?"})]}),createField(null,"looking For A Job Description","lookingForAJobDescription",[],"textarea",{}),jsxRuntimeExports.jsx("div",{className:cl$2.submit,children:jsxRuntimeExports.jsx(SubmitButton,{name:"Submit"})})]})}),EditAboutReduxForm=reduxForm({form:"edit-about"})(EditAboutForm),About=({userProfile:t,getUpdateUserProfile:s,isOwner:r})=>{const[e,o]=reactExports.useState(!1),n=()=>{o(!0)},i=()=>{o(!1),a(!1)},[c,a]=reactExports.useState(!1),l=()=>{a(!0)},u=()=>{a(!1)},m=x=>{s(x).then(()=>{a(!1)})};return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("div",{className:cl$3.aboutWrapper,children:[jsxRuntimeExports.jsx("span",{onClick:n,className:e?classNames(cl$3.aboutButton,cl$3.aboutButtonDisable):cl$3.aboutButton,children:"About"}),jsxRuntimeExports.jsxs("div",{className:e?classNames(cl$3.aboutInfoWrapper,cl$3.aboutInfoWrapperActive):cl$3.aboutInfoWrapper,children:[jsxRuntimeExports.jsx("div",{className:cl$3.close,children:jsxRuntimeExports.jsx(CloseButton,{closeWindow:i})}),!c&&jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("div",{className:cl$3.aboutMeInfo,children:[jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{children:"About me:"}),jsxRuntimeExports.jsx("span",{children:t.aboutMe?t.aboutMe:"No Info"})]}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{children:"My skills:"}),jsxRuntimeExports.jsx("span",{children:t.lookingForAJobDescription?t.lookingForAJobDescription:"No Info"})]})]}),jsxRuntimeExports.jsx("div",{className:cl$3.editAboutButton,children:r&&jsxRuntimeExports.jsx(EditButton,{goToEditMode:l})})]}),c&&jsxRuntimeExports.jsx(EditAboutReduxForm,{initialValues:t,getUpdateUserProfile:s,closeEditWindow:u,onSubmit:m})]})]})})},maxLength20$1=maxLengthCreator(20),EditSocialForm=({handleSubmit:t,userProfile:s,error:r,closeWindow:e})=>jsxRuntimeExports.jsxs("div",{className:cl$2.socialForm,children:[jsxRuntimeExports.jsx(CloseButton,{closeWindow:e}),jsxRuntimeExports.jsxs("form",{onSubmit:t,children:[jsxRuntimeExports.jsx("ul",{className:cl$2.socials,children:Object.keys(s.contacts).map(o=>jsxRuntimeExports.jsxs("li",{children:[jsxRuntimeExports.jsxs("b",{children:[o,":"]}),createField(null,o,"contacts."+o,[maxLength20$1],"input",{})]},o))}),jsxRuntimeExports.jsx(SubmitButton,{name:"Submit"}),r&&jsxRuntimeExports.jsx("div",{className:cl$2.formSummaryError,children:r})]})]}),EditSocialReduxForm=reduxForm({form:"edit-social"})(EditSocialForm),socialList="_socialList_1thfj_1",social="_social_1thfj_1",cl$1={socialList,social},SocialList=({userProfile,goToEditMode,isOwner})=>jsxRuntimeExports.jsxs("div",{className:cl$1.social,children:[jsxRuntimeExports.jsx("ul",{className:cl$1.socialList,children:reactExports.useMemo(()=>Object.entries(userProfile.contacts).map(([key,value])=>jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx("a",{href:`http://${value}`,children:jsxRuntimeExports.jsx("img",{src:eval(key),alt:key})})})},key)))}),isOwner&&jsxRuntimeExports.jsx(EditButton,{goToEditMode})]}),EditSocialList=({userProfile:t,getUpdateUserProfile:s,isOwner:r})=>{const[e,o]=reactExports.useState(!1),n=()=>{o(!0)},i=()=>{o(!1)},c=a=>{s(a).then(()=>{o(!1)})};return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:e?jsxRuntimeExports.jsx(EditSocialReduxForm,{initialValues:t,closeWindow:i,userProfile:t,onSubmit:c}):jsxRuntimeExports.jsx(SocialList,{isOwner:r,userProfile:t,goToEditMode:()=>{n()}})})},fullName="_fullName_1536m_1",cl={fullName},maxLength20=maxLengthCreator(20),EditUserNameForm=({handleSubmit:t,error:s,userProfile:r,deactivateEditUser:e})=>jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsxs("form",{onSubmit:t,className:cl$2.userNameForm,children:[jsxRuntimeExports.jsx("div",{className:cl$2.submit,children:jsxRuntimeExports.jsx(CloseButton,{closeWindow:e})}),createField(null,"User Name","fullName",[maxLength20],"input",{}),jsxRuntimeExports.jsx("div",{className:cl$2.submit,children:jsxRuntimeExports.jsx(SubmitButton,{name:"Submit"})}),s&&jsxRuntimeExports.jsx("div",{className:cl$2.formSummaryError,children:s})]})}),EditUserNameReduxForm=reduxForm({form:"edit-name"})(EditUserNameForm),UserName=({userProfile:t,getUpdateUserProfile:s,isOwner:r})=>{const[e,o]=reactExports.useState(!1),n=()=>{o(!0)},i=()=>{o(!1)},c=a=>{s(a).then(()=>{o(!1)})};return jsxRuntimeExports.jsxs("div",{className:cl.fullName,children:[!e&&jsxRuntimeExports.jsx("h2",{children:t.fullName}),r&&!e&&jsxRuntimeExports.jsx(EditButton,{goToEditMode:n}),e&&jsxRuntimeExports.jsx(EditUserNameReduxForm,{initialValues:t,onSubmit:c,userProfile:t,deactivateEditUser:i})]})},photoIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVR4nO2YTU7CQBiGH1mYaDwH0aWHKMEFulASB+E+YkR+jiLeQPAmVDC6FXeYSb4mpElLf4ZOq/Mmb0KYduZ9hk5n+MDJycnpL+gQOAcugVtARVi3teRafU8pdAJcxYSOsr5H32tVxzKjKqNb0kehOpCZOwOuc4QPrPs4lT5138ZUA+pAA2gbCJrWbRm7LllS6Qi4sBBaRbgpmRLPfJnCqy2IRL9EvQRhVYR1tp1qWA75AHyJ+6E2LwmAjQWrtqyDb8SfoTadbafyDN4DJsAc8IEfsS/fjeWarABqnwBDYLU1eJSXwFNMP32B0OHviwC4A14SBA97CnQyjGccIEv4wM+2AYY5wgce2ALoyfOcF+AjwcLeC8DEQPiNeGQD4M0gwMwGwLtBAN8GwNogwLrqAN82AHyDAAsbAHODAK82AMZVf412DW1kK1sbmZJTZV6Ax5RjGgVQcqqs7GFOyZF4mjF8pwwAgQcJ18Qyw2OjigAIFvZIzjYL2ezW8nkmbd2cY5T+T72K8U0Vyioqxt6/KGzVpIynqlpaRAqpzaoWd8Pldc9ied3LWl53cnJyohD9AmCfmW3QXb5tAAAAAElFTkSuQmCC",Avatar=({userProfile:t,savePhoto:s,isOwner:r})=>{const e=o=>{o.target.files.length&&s(o.target.files[0])};return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs("div",{className:cl$5.profileImage,children:[jsxRuntimeExports.jsx("img",{src:t.photos.small!==null?t.photos.small:defaultUserImg,alt:"default-user"}),r&&jsxRuntimeExports.jsxs("div",{className:cl$5.photoIcon,children:[jsxRuntimeExports.jsx("label",{htmlFor:"file-input",children:jsxRuntimeExports.jsx("img",{src:photoIcon,alt:"photo-icon"})}),jsxRuntimeExports.jsx("input",{id:"file-input",type:"file",onChange:e})]})]})})},logoutIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABRUlEQVR4nO2ZPU7EQAxGn9JxDChyBaCiymrpSTF32IoGJGgREidjxRmgYhtoFkGgHLSSiwixqxWxMxj8SV+b8ZPt+YkhFAptqwqogQnQAknZrXy7lrVUtQMcGwSd1ngqa6qoGjn41INQyURdIPgkXq09WJOCAI0GgEXDbutWAyAV9mAFAJGB319C18AzsADOPPbAA5DFr8C5N4BFD2DlDrjwDJAF4tIzQBaIfc8AGVgCB2MBzIA58LEhoJ/4BTi0BpjJDpKN/AYcWQLMDYPPvUzsWQFol01e45sA4PsM3I1UQrtWGTiVRnPbxEl2olvgXTn45ZCz4F8dZEkZoPN8leg8X+Y6b9fpe+8PmivgCXj0+qRMGxwAKTJA2RJqC2bgRAPA/e/12vuAo5Jxj9sREzJwm3od8n0dszaGY9bGaswaCv1VfQIQZWYHgpM4vgAAAABJRU5ErkJggg==",Logout=({logout:t})=>jsxRuntimeExports.jsxs("div",{onClick:t,className:"logout",children:[jsxRuntimeExports.jsx("img",{src:logoutIcon,alt:"logout-icon"}),jsxRuntimeExports.jsx("span",{children:"Logout"})]}),ProfileInfo=({userProfile:t,userStatus:s,updateStatus:r,getUpdateUserProfile:e,getUserPhotoUpdate:o,logout:n,isOwner:i})=>t?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs("div",{className:cl$5.myProfileInfo,children:[jsxRuntimeExports.jsx(Avatar,{userProfile:t,savePhoto:o,isOwner:i}),jsxRuntimeExports.jsxs("div",{className:cl$5.infoWrapper,children:[jsxRuntimeExports.jsxs("div",{className:cl$5.info1,children:[jsxRuntimeExports.jsx(UserName,{userProfile:t,getUpdateUserProfile:e,isOwner:i}),jsxRuntimeExports.jsx(UserStatus,{userStatus:s,updateStatus:r,isOwner:i})]}),jsxRuntimeExports.jsxs("div",{className:cl$5.info2,children:[jsxRuntimeExports.jsx(EditSocialList,{getUpdateUserProfile:e,userProfile:t,isOwner:i}),i&&jsxRuntimeExports.jsx(Logout,{logout:n})]})]})]}),jsxRuntimeExports.jsx(About,{userProfile:t,getUpdateUserProfile:e,isOwner:i})]}):jsxRuntimeExports.jsxs("div",{children:[" ",jsxRuntimeExports.jsx(Preloader,{})]}),withRouter=t=>s=>{const r={location:useLocation()},e={params:useParams()};return jsxRuntimeExports.jsx(t,{...s,match:e,location:r})},setStateToPropsForRedirect=t=>({isAuth:t.auth.isAuth}),withAuthRedirect=t=>{class s extends React.Component{render(){return this.props.isAuth?jsxRuntimeExports.jsx(t,{...this.props}):jsxRuntimeExports.jsx(Navigate,{to:"/login"})}}return connect(setStateToPropsForRedirect)(s)};class ProfileInfoContainer extends React.Component{refreshProfile(){let s=this.props.match.params.userId;s||(s=this.props.mainUserId),this.props.getUserProfile(s),this.props.getUserStatus(s)}componentDidMount(){this.refreshProfile()}componentDidUpdate(s,r){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}render(){return jsxRuntimeExports.jsx(ProfileInfo,{...this.props,isOwner:!this.props.match.params.userId,userProfile:this.props.userProfile,userStatus:this.props.userStatus,updateStatus:this.props.getUpdateUserStatus,getUpdateUserProfile:this.props.getUpdateUserProfile,getUserPhotoUpdate:this.props.getUserPhotoUpdate,logout:this.props.getLogoutFromSystem})}}const mapStateToProps$1=t=>({userProfile:t.profilePage.userProfile,userStatus:t.profilePage.userStatus,mainUserId:t.auth.id,isAuth:t.auth.isAuth}),ProfileInfoContainer$1=compose(connect(mapStateToProps$1,{getUserProfile,getUserStatus,getUpdateUserStatus,getUpdateUserProfile,getUserPhotoUpdate,getLogoutFromSystem}),withRouter,withAuthRedirect)(ProfileInfoContainer),MyProfile=({isOwner:t})=>jsxRuntimeExports.jsxs("div",{className:cl$6.myProfileWrapper,children:[jsxRuntimeExports.jsx(ProfileInfoContainer$1,{}),jsxRuntimeExports.jsx(MyPostsContainer$1,{isOwner:t})]});class MyProfileContainer extends React.Component{componentDidMount(){}render(){return jsxRuntimeExports.jsx(MyProfile,{isOwner:!this.props.match.params.userId})}}const mapStateToProps=t=>({isAuth:t.auth.isAuth}),MyProfileContainer$1=compose(connect(mapStateToProps,{}),withRouter)(MyProfileContainer);export{MyProfileContainer$1 as default};
