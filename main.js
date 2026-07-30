/*
 * hechima probe — 自動生成。編集しないこと（src/ と build.mjs が原本）。
 * 順に: hechima-wasm の emscripten glue → KeymapEngine → Hechima → プラグイン本体。
 * 本体を最後に置くので module.exports はプラグインになる（結合順が意味を持つ）。
 */

var HechimaModule = (() => {
  var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
  if (typeof __filename != 'undefined') _scriptName = _scriptName || __filename;
  return (
function(moduleArg = {}) {
  var moduleRtn;

var Module=moduleArg;var readyPromiseResolve,readyPromiseReject;var readyPromise=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject});var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";if(ENVIRONMENT_IS_NODE){}var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_NODE){var fs=require("fs");var nodePath=require("path");scriptDirectory=__dirname+"/";readBinary=filename=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);var ret=fs.readFileSync(filename);return ret};readAsync=(filename,binary=true)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);return new Promise((resolve,reject)=>{fs.readFile(filename,binary?undefined:"utf8",(err,data)=>{if(err)reject(err);else resolve(binary?data.buffer:data)})})};if(!Module["thisProgram"]&&process.argv.length>1){thisProgram=process.argv[1].replace(/\\/g,"/")}arguments_=process.argv.slice(2);quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptName){scriptDirectory=_scriptName}if(scriptDirectory.startsWith("blob:")){scriptDirectory=""}else{scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}{if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=url=>fetch(url,{credentials:"same-origin"}).then(response=>{if(response.ok){return response.arrayBuffer()}return Promise.reject(new Error(response.status+" : "+response.url))})}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];var wasmBinary=Module["wasmBinary"];var wasmMemory;var ABORT=false;var EXITSTATUS;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function preRun(){var preRuns=Module["preRun"];if(preRuns){if(typeof preRuns=="function")preRuns=[preRuns];preRuns.forEach(addOnPreRun)}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.initialized)FS.init();FS.ignorePermissions=false;TTY.init();callRuntimeCallbacks(__ATINIT__)}function postRun(){var postRuns=Module["postRun"];if(postRuns){if(typeof postRuns=="function")postRuns=[postRuns];postRuns.forEach(addOnPostRun)}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)}function removeRunDependency(id){runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";var isDataURI=filename=>filename.startsWith(dataURIPrefix);var isFileURI=filename=>filename.startsWith("file://");function findWasmBinary(){var f="hechima-wasm.wasm";if(!isDataURI(f)){return locateFile(f)}return f}var wasmBinaryFile;function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}function getBinaryPromise(binaryFile){if(!wasmBinary){return readAsync(binaryFile).then(response=>new Uint8Array(response),()=>getBinarySync(binaryFile))}return Promise.resolve().then(()=>getBinarySync(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>WebAssembly.instantiate(binary,imports)).then(receiver,reason=>{err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)})})}return instantiateArrayBuffer(binaryFile,imports,callback)}function getWasmImports(){return{env:wasmImports,wasi_snapshot_preview1:wasmImports}}function createWasm(){var info=getWasmImports();function receiveInstance(instance,module){wasmExports=instance.exports;wasmMemory=wasmExports["memory"];updateMemoryViews();addOnInit(wasmExports["__wasm_call_ctors"]);removeRunDependency("wasm-instantiate");return wasmExports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err(`Module.instantiateWasm callback failed with error: ${e}`);readyPromiseReject(e)}}wasmBinaryFile??=findWasmBinary();instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult).catch(readyPromiseReject);return{}}var tempDouble;var tempI64;function ExitStatus(status){this.name="ExitStatus";this.message=`Program terminated with exit(${status})`;this.status=status}var callRuntimeCallbacks=callbacks=>{callbacks.forEach(f=>f(Module))};var noExitRuntime=Module["noExitRuntime"]||true;var stackRestore=val=>__emscripten_stack_restore(val);var stackSave=()=>_emscripten_stack_get_current();class ExceptionInfo{constructor(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24}set_type(type){HEAPU32[this.ptr+4>>2]=type}get_type(){return HEAPU32[this.ptr+4>>2]}set_destructor(destructor){HEAPU32[this.ptr+8>>2]=destructor}get_destructor(){return HEAPU32[this.ptr+8>>2]}set_caught(caught){caught=caught?1:0;HEAP8[this.ptr+12]=caught}get_caught(){return HEAP8[this.ptr+12]!=0}set_rethrown(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13]=rethrown}get_rethrown(){return HEAP8[this.ptr+13]!=0}init(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor)}set_adjusted_ptr(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr}get_adjusted_ptr(){return HEAPU32[this.ptr+16>>2]}}var exceptionLast=0;var uncaughtExceptionCount=0;var ___cxa_throw=(ptr,type,destructor)=>{var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw exceptionLast};var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir},basename:path=>{if(path==="/")return"/";path=PATH.normalize(path);path=path.replace(/\/$/,"");var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>{if(typeof crypto=="object"&&typeof crypto["getRandomValues"]=="function"){return view=>crypto.getRandomValues(view)}else if(ENVIRONMENT_IS_NODE){try{var crypto_module=require("crypto");var randomFillSync=crypto_module["randomFillSync"];if(randomFillSync){return view=>crypto_module["randomFillSync"](view)}var randomBytes=crypto_module["randomBytes"];return view=>(view.set(randomBytes(view.byteLength)),view)}catch(e){}}abort("initRandomDevice")};var randomFill=view=>(randomFill=initRandomFill())(view);var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).substr(1);to=PATH_FS.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder:undefined;var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead=NaN)=>{var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx};function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc(BUFSIZE);var bytesRead=0;var fd=process.stdin.fd;try{bytesRead=fs.readSync(fd,buf,0,BUFSIZE)}catch(e){if(e.toString().includes("EOF"))bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}}else if(typeof window!="undefined"&&typeof window.prompt=="function"){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.timestamp=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output&&tty.output.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output&&tty.output.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(address,size)=>{HEAPU8.fill(0,address,address+size)};var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16384|511,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.timestamp=Date.now();if(parent){parent.contents[name]=node;parent.timestamp=node.timestamp}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){throw FS.genericErrors[44]},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}}delete old_node.parent.contents[old_node.name];old_node.parent.timestamp=Date.now();old_node.name=new_name;new_dir.contents[new_name]=old_node;new_dir.timestamp=old_node.parent.timestamp},unlink(parent,name){delete parent.contents[name];parent.timestamp=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.timestamp=Date.now()},readdir(node){var entries=[".",".."];for(var key of Object.keys(node.contents)){entries.push(key)}return entries},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},allocate(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length)},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}HEAP8.set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var asyncLoad=(url,onload,onerror,noRunDep)=>{var dep=!noRunDep?getUniqueRunDependency(`al ${url}`):"";readAsync(url).then(arrayBuffer=>{onload(new Uint8Array(arrayBuffer));if(dep)removeRunDependency(dep)},err=>{if(onerror){onerror()}else{throw`Loading data file "${url}" failed.`}});if(dep)addRunDependency(dep)};var FS_createDataFile=(parent,name,fileData,canRead,canWrite,canOwn)=>{FS.createDataFile(parent,name,fileData,canRead,canWrite,canOwn)};var preloadPlugins=Module["preloadPlugins"]||[];var FS_handledByPreloadPlugin=(byteArray,fullname,finish,onerror)=>{if(typeof Browser!="undefined")Browser.init();var handled=false;preloadPlugins.forEach(plugin=>{if(handled)return;if(plugin["canHandle"](fullname)){plugin["handle"](byteArray,fullname,finish,onerror);handled=true}});return handled};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);function processData(byteArray){function finish(byteArray){preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}onload?.();removeRunDependency(dep)}if(FS_handledByPreloadPlugin(byteArray,fullname,finish,()=>{onerror?.();removeRunDependency(dep)})){return}finish(byteArray)}addRunDependency(dep);if(typeof url=="string"){asyncLoad(url,processData,onerror)}else{processData(url)}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:class{constructor(errno){this.name="ErrnoError";this.errno=errno}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev;this.readMode=292|73;this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){path=PATH_FS.resolve(path);if(!path)return{path:"",node:null};var defaults={follow_mount:true,recurse_count:0};opts=Object.assign(defaults,opts);if(opts.recurse_count>8){throw new FS.ErrnoError(32)}var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH_FS.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count+1});current=lookup.node;if(count++>40){throw new FS.ErrnoError(32)}}}}return{path:current_path,node:current}},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}else if(perms.includes("w")&&!(node.mode&146)){return 2}else if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&512){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}mounts.forEach(mount=>{if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done)})},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach(hash=>{var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}});node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name==="."||name===".."){throw new FS.ErrnoError(28)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},create(path,mode){mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode){mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+="/"+dirs[i];try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(54)}return node.node_ops.readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return PATH_FS.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(44)}if(!node.node_ops.getattr){throw new FS.ErrnoError(63)}return node.node_ops.getattr(node)},lstat(path){return FS.stat(path,true)},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()})},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.chmod(stream.node,mode)},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{timestamp:Date.now()})},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.chown(stream.node,uid,gid)},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()})},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if((stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.truncate(stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)})},open(path,flags,mode){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=typeof mode=="undefined"?438:mode;mode=mode&4095|32768}else{mode=0}var node;if(typeof path=="object"){node=path}else{path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else{node=FS.mknod(path,mode,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(Module["logReadFiles"]&&!(flags&1)){if(!(path in FS.readFiles)){FS.readFiles[path]=1}}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},allocate(stream,offset,length){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(offset<0||length<=0){throw new FS.ErrnoError(28)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(stream.node.mode)){throw new FS.ErrnoError(43)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(138)}stream.stream_ops.allocate(stream,offset,length)},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error(`Invalid encoding type "${opts.encoding}"`)}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){ret=UTF8ArrayToString(buf)}else if(opts.encoding==="binary"){ret=buf}FS.close(stream);return ret},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,undefined,opts.canOwn)}else if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{throw new Error("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomLeft=randomFill(randomBuffer).byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16384|511,73);node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path}};ret.parent=ret;return ret}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){[44].forEach(code=>{FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack="<generic error, no stack>"});FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream)}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.timestamp=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(typeof XMLHttpRequest!="undefined"){throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url);obj.usedBytes=obj.contents.length}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{constructor(){this.lengthKnown=false;this.chunks=[]}get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)throw new Error("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)throw new Error("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")throw new Error("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(typeof XMLHttpRequest!="undefined"){if(!ENVIRONMENT_IS_WORKER)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach(key=>{var fn=node.stream_ops[key];stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}});function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var UTF8ToString=(ptr,maxBytesToRead)=>ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):"";var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return PATH.join2(dir,path)},doStat(func,path,buf){var stat=func(path);HEAP32[buf>>2]=stat.dev;HEAP32[buf+4>>2]=stat.mode;HEAPU32[buf+8>>2]=stat.nlink;HEAP32[buf+12>>2]=stat.uid;HEAP32[buf+16>>2]=stat.gid;HEAP32[buf+20>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+24>>2]=tempI64[0],HEAP32[buf+28>>2]=tempI64[1];HEAP32[buf+32>>2]=4096;HEAP32[buf+36>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAPU32[buf+48>>2]=atime%1e3*1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=mtime%1e3*1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=ctime%1e3*1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];return 0},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_chmod(path,mode){try{path=SYSCALLS.getStr(path);FS.chmod(path,mode);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function syscallGetVarargI(){var ret=HEAP32[+SYSCALLS.varargs>>2];SYSCALLS.varargs+=4;return ret}var syscallGetVarargP=syscallGetVarargI;function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 12:{var arg=syscallGetVarargP();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 13:case 14:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){try{var stream=SYSCALLS.getStreamFromFD(fd);return SYSCALLS.doStat(FS.stat,stream.path,buf)}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_ioctl(fd,op,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:{if(!stream.tty)return-59;return 0}case 21505:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcgets){var termios=stream.tty.ops.ioctl_tcgets(stream);var argp=syscallGetVarargP();HEAP32[argp>>2]=termios.c_iflag||0;HEAP32[argp+4>>2]=termios.c_oflag||0;HEAP32[argp+8>>2]=termios.c_cflag||0;HEAP32[argp+12>>2]=termios.c_lflag||0;for(var i=0;i<32;i++){HEAP8[argp+i+17]=termios.c_cc[i]||0}return 0}return 0}case 21510:case 21511:case 21512:{if(!stream.tty)return-59;return 0}case 21506:case 21507:case 21508:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcsets){var argp=syscallGetVarargP();var c_iflag=HEAP32[argp>>2];var c_oflag=HEAP32[argp+4>>2];var c_cflag=HEAP32[argp+8>>2];var c_lflag=HEAP32[argp+12>>2];var c_cc=[];for(var i=0;i<32;i++){c_cc.push(HEAP8[argp+i+17])}return stream.tty.ops.ioctl_tcsets(stream.tty,op,{c_iflag,c_oflag,c_cflag,c_lflag,c_cc})}return 0}case 21519:{if(!stream.tty)return-59;var argp=syscallGetVarargP();HEAP32[argp>>2]=0;return 0}case 21520:{if(!stream.tty)return-59;return-28}case 21531:{var argp=syscallGetVarargP();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tiocgwinsz){var winsize=stream.tty.ops.ioctl_tiocgwinsz(stream.tty);var argp=syscallGetVarargP();HEAP16[argp>>1]=winsize[0];HEAP16[argp+2>>1]=winsize[1]}return 0}case 21524:{if(!stream.tty)return-59;return 0}case 21515:{if(!stream.tty)return-59;return 0}default:return-28}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.lstat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_mkdirat(dirfd,path,mode){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);path=PATH.normalize(path);if(path[path.length-1]==="/")path=path.substr(0,path.length-1);FS.mkdir(path,mode,0);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.doStat(nofollow?FS.lstat:FS.stat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_renameat(olddirfd,oldpath,newdirfd,newpath){try{oldpath=SYSCALLS.getStr(oldpath);newpath=SYSCALLS.getStr(newpath);oldpath=SYSCALLS.calculateAt(olddirfd,oldpath);newpath=SYSCALLS.calculateAt(newdirfd,newpath);FS.rename(oldpath,newpath);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.stat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_unlinkat(dirfd,path,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(flags===0){FS.unlink(path)}else if(flags===512){FS.rmdir(path)}else{abort("Invalid flags passed to unlinkat")}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readI53FromI64=ptr=>HEAPU32[ptr>>2]+HEAP32[ptr+4>>2]*4294967296;function ___syscall_utimensat(dirfd,path,times,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path,true);var now=Date.now(),atime,mtime;if(!times){atime=now;mtime=now}else{var seconds=readI53FromI64(times);var nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){atime=now}else if(nanoseconds==1073741822){atime=-1}else{atime=seconds*1e3+nanoseconds/(1e3*1e3)}times+=16;seconds=readI53FromI64(times);nanoseconds=HEAP32[times+8>>2];if(nanoseconds==1073741823){mtime=now}else if(nanoseconds==1073741822){mtime=-1}else{mtime=seconds*1e3+nanoseconds/(1e3*1e3)}}if(mtime!=-1||atime!=-1){FS.utime(path,atime,mtime)}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>{abort("")};var nowIsMonotonic=1;var __emscripten_get_now_is_monotonic=()=>nowIsMonotonic;var __emscripten_memcpy_js=(dest,src,num)=>HEAPU8.copyWithin(dest,src,src+num);var convertI32PairToI53Checked=(lo,hi)=>hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN;function __gmtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getUTCSeconds();HEAP32[tmPtr+4>>2]=date.getUTCMinutes();HEAP32[tmPtr+8>>2]=date.getUTCHours();HEAP32[tmPtr+12>>2]=date.getUTCDate();HEAP32[tmPtr+16>>2]=date.getUTCMonth();HEAP32[tmPtr+20>>2]=date.getUTCFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getUTCDay();var start=Date.UTC(date.getUTCFullYear(),0,1,0,0,0,0);var yday=(date.getTime()-start)/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday}var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time_low,time_high,tmPtr){var time=convertI32PairToI53Checked(time_low,time_high);var date=new Date(time*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst}var setTempRet0=val=>__emscripten_tempret_set(val);var __mktime_js=function(tmPtr){var ret=(()=>{var date=new Date(HEAP32[tmPtr+20>>2]+1900,HEAP32[tmPtr+16>>2],HEAP32[tmPtr+12>>2],HEAP32[tmPtr+8>>2],HEAP32[tmPtr+4>>2],HEAP32[tmPtr>>2],0);var dst=HEAP32[tmPtr+32>>2];var guessedOffset=date.getTimezoneOffset();var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dstOffset=Math.min(winterOffset,summerOffset);if(dst<0){HEAP32[tmPtr+32>>2]=Number(summerOffset!=winterOffset&&dstOffset==guessedOffset)}else if(dst>0!=(dstOffset==guessedOffset)){var nonDstOffset=Math.max(winterOffset,summerOffset);var trueOffset=dst>0?dstOffset:nonDstOffset;date.setTime(date.getTime()+(trueOffset-guessedOffset)*6e4)}HEAP32[tmPtr+24>>2]=date.getDay();var yday=ydayFromDate(date)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getYear();var timeMs=date.getTime();if(isNaN(timeMs)){return-1}return timeMs/1e3})();return setTempRet0((tempDouble=ret,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)),ret>>>0};function __mmap_js(len,prot,flags,fd,offset_low,offset_high,allocated,addr){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;HEAP32[allocated>>2]=res.allocated;HEAPU32[addr>>2]=ptr;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset_low,offset_high){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);var __tzset_js=(timezone,daylight,std_name,dst_name)=>{var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAPU32[timezone>>2]=stdTimezoneOffset*60;HEAP32[daylight>>2]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_date_now=()=>Date.now();var _emscripten_errn=(str,len)=>err(UTF8ToString(str,len));var getHeapMax=()=>2147483648;var _emscripten_get_heap_max=()=>getHeapMax();var _emscripten_get_now=()=>performance.now();var _emscripten_pc_get_function=pc=>{abort("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER");return 0};var growMemory=size=>{var b=wasmMemory.buffer;var pages=(size-b.byteLength+65535)/65536|0;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var convertFrameToPC=frame=>{abort("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER");return 0};var UNWIND_CACHE={};var saveInUnwindCache=callstack=>{callstack.forEach(frame=>{var pc=convertFrameToPC(frame);if(pc){UNWIND_CACHE[pc]=frame}})};function jsStackTrace(){return(new Error).stack.toString()}function _emscripten_stack_snapshot(){var callstack=jsStackTrace().split("\n");if(callstack[0]=="Error"){callstack.shift()}saveInUnwindCache(callstack);UNWIND_CACHE.last_addr=convertFrameToPC(callstack[3]);UNWIND_CACHE.last_stack=callstack;return UNWIND_CACHE.last_addr}var _emscripten_stack_unwind_buffer=(addr,buffer,count)=>{var stack;if(UNWIND_CACHE.last_addr==addr){stack=UNWIND_CACHE.last_stack}else{stack=jsStackTrace().split("\n");if(stack[0]=="Error"){stack.shift()}saveInUnwindCache(stack)}var offset=3;while(stack[offset]&&convertFrameToPC(stack[offset])!=addr){++offset}for(var i=0;i<count&&stack[i+offset];++i){HEAP32[buffer+i*4>>2]=convertFrameToPC(stack[i+offset])}return i};var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};var stringToAscii=(str,buffer)=>{for(var i=0;i<str.length;++i){HEAP8[buffer++]=str.charCodeAt(i)}HEAP8[buffer]=0};var _environ_get=(__environ,environ_buf)=>{var bufSize=0;getEnvStrings().forEach((string,i)=>{var ptr=environ_buf+bufSize;HEAPU32[__environ+i*4>>2]=ptr;stringToAscii(string,ptr);bufSize+=string.length+1});return 0};var _environ_sizes_get=(penviron_count,penviron_buf_size)=>{var strings=getEnvStrings();HEAPU32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(string=>bufSize+=string.length+1);HEAPU32[penviron_buf_size>>2]=bufSize;return 0};var runtimeKeepaliveCounter=0;var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var _exit=exitJS;function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){var offset=convertI32PairToI53Checked(offset_low,offset_high);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var _getentropy=(buffer,size)=>{randomFill(HEAPU8.subarray(buffer,buffer+size));return 0};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{HEAP8.set(array,buffer)};var stackAlloc=sz=>__emscripten_stack_alloc(sz);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};FS.createPreloadedFile=FS_createPreloadedFile;FS.staticInit();var wasmImports={__cxa_throw:___cxa_throw,__syscall_chmod:___syscall_chmod,__syscall_fcntl64:___syscall_fcntl64,__syscall_fstat64:___syscall_fstat64,__syscall_ioctl:___syscall_ioctl,__syscall_lstat64:___syscall_lstat64,__syscall_mkdirat:___syscall_mkdirat,__syscall_newfstatat:___syscall_newfstatat,__syscall_openat:___syscall_openat,__syscall_renameat:___syscall_renameat,__syscall_stat64:___syscall_stat64,__syscall_unlinkat:___syscall_unlinkat,__syscall_utimensat:___syscall_utimensat,_abort_js:__abort_js,_emscripten_get_now_is_monotonic:__emscripten_get_now_is_monotonic,_emscripten_memcpy_js:__emscripten_memcpy_js,_gmtime_js:__gmtime_js,_localtime_js:__localtime_js,_mktime_js:__mktime_js,_mmap_js:__mmap_js,_munmap_js:__munmap_js,_tzset_js:__tzset_js,emscripten_date_now:_emscripten_date_now,emscripten_errn:_emscripten_errn,emscripten_get_heap_max:_emscripten_get_heap_max,emscripten_get_now:_emscripten_get_now,emscripten_pc_get_function:_emscripten_pc_get_function,emscripten_resize_heap:_emscripten_resize_heap,emscripten_stack_snapshot:_emscripten_stack_snapshot,emscripten_stack_unwind_buffer:_emscripten_stack_unwind_buffer,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,exit:_exit,fd_close:_fd_close,fd_read:_fd_read,fd_seek:_fd_seek,fd_write:_fd_write,getentropy:_getentropy,proc_exit:_proc_exit};var wasmExports=createWasm();var ___wasm_call_ctors=()=>(___wasm_call_ctors=wasmExports["__wasm_call_ctors"])();var _hechima_init=Module["_hechima_init"]=a0=>(_hechima_init=Module["_hechima_init"]=wasmExports["hechima_init"])(a0);var _hechima_convert=Module["_hechima_convert"]=(a0,a1)=>(_hechima_convert=Module["_hechima_convert"]=wasmExports["hechima_convert"])(a0,a1);var _hechima_convert2=Module["_hechima_convert2"]=(a0,a1,a2)=>(_hechima_convert2=Module["_hechima_convert2"]=wasmExports["hechima_convert2"])(a0,a1,a2);var _hechima_dict_list=Module["_hechima_dict_list"]=()=>(_hechima_dict_list=Module["_hechima_dict_list"]=wasmExports["hechima_dict_list"])();var _hechima_dict_add=Module["_hechima_dict_add"]=(a0,a1,a2)=>(_hechima_dict_add=Module["_hechima_dict_add"]=wasmExports["hechima_dict_add"])(a0,a1,a2);var _hechima_dict_remove=Module["_hechima_dict_remove"]=a0=>(_hechima_dict_remove=Module["_hechima_dict_remove"]=wasmExports["hechima_dict_remove"])(a0);var _hechima_reconvert=Module["_hechima_reconvert"]=(a0,a1)=>(_hechima_reconvert=Module["_hechima_reconvert"]=wasmExports["hechima_reconvert"])(a0,a1);var _hechima_learn=Module["_hechima_learn"]=(a0,a1,a2)=>(_hechima_learn=Module["_hechima_learn"]=wasmExports["hechima_learn"])(a0,a1,a2);var _hechima_revert=Module["_hechima_revert"]=()=>(_hechima_revert=Module["_hechima_revert"]=wasmExports["hechima_revert"])();var _hechima_sync=Module["_hechima_sync"]=()=>(_hechima_sync=Module["_hechima_sync"]=wasmExports["hechima_sync"])();var _hechima_resize=Module["_hechima_resize"]=(a0,a1,a2)=>(_hechima_resize=Module["_hechima_resize"]=wasmExports["hechima_resize"])(a0,a1,a2);var _free=Module["_free"]=a0=>(_free=Module["_free"]=wasmExports["free"])(a0);var _malloc=Module["_malloc"]=a0=>(_malloc=Module["_malloc"]=wasmExports["malloc"])(a0);var _emscripten_builtin_memalign=(a0,a1)=>(_emscripten_builtin_memalign=wasmExports["emscripten_builtin_memalign"])(a0,a1);var __emscripten_tempret_set=a0=>(__emscripten_tempret_set=wasmExports["_emscripten_tempret_set"])(a0);var __emscripten_stack_restore=a0=>(__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"])(a0);var __emscripten_stack_alloc=a0=>(__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"])(a0);var _emscripten_stack_get_current=()=>(_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"])();var dynCall_vij=Module["dynCall_vij"]=(a0,a1,a2,a3)=>(dynCall_vij=Module["dynCall_vij"]=wasmExports["dynCall_vij"])(a0,a1,a2,a3);var dynCall_vj=Module["dynCall_vj"]=(a0,a1,a2)=>(dynCall_vj=Module["dynCall_vj"]=wasmExports["dynCall_vj"])(a0,a1,a2);var dynCall_viij=Module["dynCall_viij"]=(a0,a1,a2,a3,a4)=>(dynCall_viij=Module["dynCall_viij"]=wasmExports["dynCall_viij"])(a0,a1,a2,a3,a4);var dynCall_viijii=Module["dynCall_viijii"]=(a0,a1,a2,a3,a4,a5,a6)=>(dynCall_viijii=Module["dynCall_viijii"]=wasmExports["dynCall_viijii"])(a0,a1,a2,a3,a4,a5,a6);var dynCall_iiiijij=Module["dynCall_iiiijij"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8)=>(dynCall_iiiijij=Module["dynCall_iiiijij"]=wasmExports["dynCall_iiiijij"])(a0,a1,a2,a3,a4,a5,a6,a7,a8);var dynCall_iiji=Module["dynCall_iiji"]=(a0,a1,a2,a3,a4)=>(dynCall_iiji=Module["dynCall_iiji"]=wasmExports["dynCall_iiji"])(a0,a1,a2,a3,a4);var dynCall_ji=Module["dynCall_ji"]=(a0,a1)=>(dynCall_ji=Module["dynCall_ji"]=wasmExports["dynCall_ji"])(a0,a1);var dynCall_jii=Module["dynCall_jii"]=(a0,a1,a2)=>(dynCall_jii=Module["dynCall_jii"]=wasmExports["dynCall_jii"])(a0,a1,a2);var dynCall_viji=Module["dynCall_viji"]=(a0,a1,a2,a3,a4)=>(dynCall_viji=Module["dynCall_viji"]=wasmExports["dynCall_viji"])(a0,a1,a2,a3,a4);var dynCall_jiji=Module["dynCall_jiji"]=(a0,a1,a2,a3,a4)=>(dynCall_jiji=Module["dynCall_jiji"]=wasmExports["dynCall_jiji"])(a0,a1,a2,a3,a4);var dynCall_iiiiij=Module["dynCall_iiiiij"]=(a0,a1,a2,a3,a4,a5,a6)=>(dynCall_iiiiij=Module["dynCall_iiiiij"]=wasmExports["dynCall_iiiiij"])(a0,a1,a2,a3,a4,a5,a6);var dynCall_iiiiijj=Module["dynCall_iiiiijj"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8)=>(dynCall_iiiiijj=Module["dynCall_iiiiijj"]=wasmExports["dynCall_iiiiijj"])(a0,a1,a2,a3,a4,a5,a6,a7,a8);var dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)=>(dynCall_iiiiiijj=Module["dynCall_iiiiiijj"]=wasmExports["dynCall_iiiiiijj"])(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9);Module["ENV"]=ENV;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["FS"]=FS;var calledRun;var calledPrerun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}if(!calledPrerun){calledPrerun=1;preRun();if(runDependencies>0){return}}function doRun(){if(calledRun)return;calledRun=1;Module["calledRun"]=1;if(ABORT)return;initRuntime();readyPromiseResolve(Module);Module["onRuntimeInitialized"]?.();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();moduleRtn=readyPromise;


  return moduleRtn;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = HechimaModule;
else if (typeof define === 'function' && define['amd'])
  define([], () => HechimaModule);


// ==== vendored: KeymapEngine ====
var KeymapEngine = (function () {
    var module = { exports: {} };
    var exports = module.exports;
    var define = undefined;
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.KeymapEngine = {}));
})(this, function(exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region src/engine/hid-key-codes.ts
	/** Named HID key codes (USB HID Usage Tables) */
	const HID = {
		A: 4,
		B: 5,
		C: 6,
		D: 7,
		E: 8,
		F: 9,
		G: 10,
		H: 11,
		I: 12,
		J: 13,
		K: 14,
		L: 15,
		M: 16,
		N: 17,
		O: 18,
		P: 19,
		Q: 20,
		R: 21,
		S: 22,
		T: 23,
		U: 24,
		V: 25,
		W: 26,
		X: 27,
		Y: 28,
		Z: 29,
		DIGIT_1: 30,
		DIGIT_2: 31,
		DIGIT_3: 32,
		DIGIT_4: 33,
		DIGIT_5: 34,
		DIGIT_6: 35,
		DIGIT_7: 36,
		DIGIT_8: 37,
		DIGIT_9: 38,
		DIGIT_0: 39,
		ENTER: 40,
		ESCAPE: 41,
		BACKSPACE: 42,
		TAB: 43,
		SPACE: 44,
		HYPHEN: 45,
		EQUAL: 46,
		BRACKET_LEFT: 47,
		BRACKET_RIGHT: 48,
		BACKSLASH: 49,
		SEMICOLON: 51,
		QUOTE: 52,
		BACKQUOTE: 53,
		COMMA: 54,
		PERIOD: 55,
		SLASH: 56,
		CAPS_LOCK: 57,
		F1: 58,
		F2: 59,
		F3: 60,
		F4: 61,
		F5: 62,
		F6: 63,
		F7: 64,
		F8: 65,
		F9: 66,
		F10: 67,
		F11: 68,
		F12: 69,
		ARROW_RIGHT: 79,
		ARROW_LEFT: 80,
		ARROW_DOWN: 81,
		ARROW_UP: 82,
		DELETE_FORWARD: 76,
		HOME: 74,
		END: 77,
		PAGE_UP: 75,
		PAGE_DOWN: 78,
		INTERNATIONAL_1: 135,
		INTERNATIONAL_2: 136,
		INTERNATIONAL_3: 137,
		INTERNATIONAL_4: 138,
		INTERNATIONAL_5: 139,
		LANG1: 144,
		LANG2: 145,
		RIGHT_ALT: 230
	};
	/** Browser KeyboardEvent.code → HID key code */
	const CODE_TO_HID = {
		KeyA: HID.A,
		KeyB: HID.B,
		KeyC: HID.C,
		KeyD: HID.D,
		KeyE: HID.E,
		KeyF: HID.F,
		KeyG: HID.G,
		KeyH: HID.H,
		KeyI: HID.I,
		KeyJ: HID.J,
		KeyK: HID.K,
		KeyL: HID.L,
		KeyM: HID.M,
		KeyN: HID.N,
		KeyO: HID.O,
		KeyP: HID.P,
		KeyQ: HID.Q,
		KeyR: HID.R,
		KeyS: HID.S,
		KeyT: HID.T,
		KeyU: HID.U,
		KeyV: HID.V,
		KeyW: HID.W,
		KeyX: HID.X,
		KeyY: HID.Y,
		KeyZ: HID.Z,
		Digit1: HID.DIGIT_1,
		Digit2: HID.DIGIT_2,
		Digit3: HID.DIGIT_3,
		Digit4: HID.DIGIT_4,
		Digit5: HID.DIGIT_5,
		Digit6: HID.DIGIT_6,
		Digit7: HID.DIGIT_7,
		Digit8: HID.DIGIT_8,
		Digit9: HID.DIGIT_9,
		Digit0: HID.DIGIT_0,
		Enter: HID.ENTER,
		Escape: HID.ESCAPE,
		Backspace: HID.BACKSPACE,
		Tab: HID.TAB,
		Space: HID.SPACE,
		Minus: HID.HYPHEN,
		Equal: HID.EQUAL,
		BracketLeft: HID.BRACKET_LEFT,
		BracketRight: HID.BRACKET_RIGHT,
		Backslash: HID.BACKSLASH,
		Semicolon: HID.SEMICOLON,
		Quote: HID.QUOTE,
		Backquote: HID.BACKQUOTE,
		Comma: HID.COMMA,
		Period: HID.PERIOD,
		Slash: HID.SLASH,
		CapsLock: HID.CAPS_LOCK,
		F1: HID.F1,
		F2: HID.F2,
		F3: HID.F3,
		F4: HID.F4,
		F5: HID.F5,
		F6: HID.F6,
		F7: HID.F7,
		F8: HID.F8,
		F9: HID.F9,
		F10: HID.F10,
		F11: HID.F11,
		F12: HID.F12,
		ArrowRight: HID.ARROW_RIGHT,
		ArrowLeft: HID.ARROW_LEFT,
		ArrowDown: HID.ARROW_DOWN,
		ArrowUp: HID.ARROW_UP,
		Delete: HID.DELETE_FORWARD,
		Home: HID.HOME,
		End: HID.END,
		PageUp: HID.PAGE_UP,
		PageDown: HID.PAGE_DOWN,
		IntlRo: HID.INTERNATIONAL_1,
		IntlYen: HID.INTERNATIONAL_3,
		NonConvert: HID.INTERNATIONAL_5,
		Convert: HID.INTERNATIONAL_4,
		Lang1: HID.LANG1,
		Lang2: HID.LANG2,
		AltRight: HID.RIGHT_ALT
	};
	function browserCodeToHID(code) {
		return CODE_TO_HID[code];
	}
	/** HID usage name (JSON keymap format) → HID key code */
	const NAME_TO_HID = {
		a: HID.A,
		b: HID.B,
		c: HID.C,
		d: HID.D,
		e: HID.E,
		f: HID.F,
		g: HID.G,
		h: HID.H,
		i: HID.I,
		j: HID.J,
		k: HID.K,
		l: HID.L,
		m: HID.M,
		n: HID.N,
		o: HID.O,
		p: HID.P,
		q: HID.Q,
		r: HID.R,
		s: HID.S,
		t: HID.T,
		u: HID.U,
		v: HID.V,
		w: HID.W,
		x: HID.X,
		y: HID.Y,
		z: HID.Z,
		"1": HID.DIGIT_1,
		"2": HID.DIGIT_2,
		"3": HID.DIGIT_3,
		"4": HID.DIGIT_4,
		"5": HID.DIGIT_5,
		"6": HID.DIGIT_6,
		"7": HID.DIGIT_7,
		"8": HID.DIGIT_8,
		"9": HID.DIGIT_9,
		"0": HID.DIGIT_0,
		enter: HID.ENTER,
		escape: HID.ESCAPE,
		backspace: HID.BACKSPACE,
		delete: HID.DELETE_FORWARD,
		tab: HID.TAB,
		space: HID.SPACE,
		capsLock: HID.CAPS_LOCK,
		hyphen: HID.HYPHEN,
		equal: HID.EQUAL,
		bracketLeft: HID.BRACKET_LEFT,
		bracketRight: HID.BRACKET_RIGHT,
		backslash: HID.BACKSLASH,
		semicolon: HID.SEMICOLON,
		quote: HID.QUOTE,
		backquote: HID.BACKQUOTE,
		comma: HID.COMMA,
		period: HID.PERIOD,
		slash: HID.SLASH,
		arrowRight: HID.ARROW_RIGHT,
		arrowLeft: HID.ARROW_LEFT,
		arrowDown: HID.ARROW_DOWN,
		arrowUp: HID.ARROW_UP,
		home: HID.HOME,
		end: HID.END,
		pageUp: HID.PAGE_UP,
		pageDown: HID.PAGE_DOWN,
		f1: HID.F1,
		f2: HID.F2,
		f3: HID.F3,
		f4: HID.F4,
		f5: HID.F5,
		f6: HID.F6,
		f7: HID.F7,
		f8: HID.F8,
		f9: HID.F9,
		f10: HID.F10,
		f11: HID.F11,
		f12: HID.F12,
		international1: HID.INTERNATIONAL_1,
		international2: HID.INTERNATIONAL_2,
		international3: HID.INTERNATIONAL_3,
		international4: HID.INTERNATIONAL_4,
		international5: HID.INTERNATIONAL_5,
		nonConvert: HID.INTERNATIONAL_5,
		convert: HID.INTERNATIONAL_4,
		lang1: HID.LANG1,
		lang2: HID.LANG2,
		rightAlt: HID.RIGHT_ALT
	};
	function hidNameToCode(name) {
		return NAME_TO_HID[name];
	}
	/** HID key code → usage name */
	const HID_TO_NAME = {};
	for (const [name, code] of Object.entries(NAME_TO_HID)) HID_TO_NAME[code] = name;
	function hidCodeToName(code) {
		return HID_TO_NAME[code];
	}
	/** HID key code → browser KeyboardEvent.code (reverse of CODE_TO_HID) */
	const HID_TO_BROWSER = {};
	for (const [code, hid] of Object.entries(CODE_TO_HID)) if (!HID_TO_BROWSER[hid]) HID_TO_BROWSER[hid] = code;
	/** HID usage name → browser code */
	function hidNameToBrowserCode(name) {
		const hid = NAME_TO_HID[name];
		return hid !== void 0 ? HID_TO_BROWSER[hid] : void 0;
	}
	//#endregion
	//#region src/engine/types.ts
	/** Modifier key bit flags */
	const KeyModifierFlags = {
		SHIFT: 1,
		CONTROL: 2,
		ALT: 4,
		META: 8
	};
	//#endregion
	//#region src/engine/keymap-decoder.ts
	/** Parse a raw JSON object into a KeymapDefinition */
	function decodeKeymap$1(json) {
		const behavior = json.behavior;
		if (!behavior || behavior.type !== "sequential" && behavior.type !== "chord") throw new Error(`Unsupported behavior type: ${behavior?.type}`);
		const modeKeys = decodeModeKeys(json.modeKeys);
		const prefixShiftKeys = json.prefixShiftKeys;
		const common = {
			formatVersion: json.formatVersion || "1.0",
			name: json.name,
			description: json.description,
			author: json.author,
			contributor: json.contributor,
			basedOn: json.basedOn,
			license: json.license,
			keyboardLayout: json.keyboardLayout,
			targetScript: json.targetScript,
			inputBase: json.inputBase,
			keyRemap: json.keyRemap,
			suffixRules: json.suffixRules,
			inputMappings: filterComments(json.inputMappings),
			prefixShiftKeys,
			modeKeys,
			extensions: json.extensions
		};
		if (behavior.type === "chord") {
			const config = behavior.config;
			const chordConfig = {
				hidToKey: config.hidToKey ?? {},
				shiftKeys: config.shiftKeys ?? [],
				lookupTable: config.lookupTable ?? {},
				specialActions: config.specialActions ?? {},
				judgment: config.judgment === "mutual" ? "mutual" : "window",
				simultaneousWindow: config.simultaneousWindow ?? .1,
				englishLookupTable: config.englishLookupTable,
				englishSpecialActions: config.englishSpecialActions
			};
			return {
				...common,
				behavior: {
					type: "chord",
					config: chordConfig
				}
			};
		}
		const characterMap = {};
		const rawMap = behavior.characterMap;
		if (rawMap) {
			for (const [k, v] of Object.entries(rawMap)) if (k.length === 1 && v.length === 1) characterMap[k] = v;
		}
		return {
			...common,
			behavior: {
				type: "sequential",
				characterMap
			}
		};
	}
	/** Decode modeKeys from JSON string keys like "ctrl+space" */
	function decodeModeKeys(raw) {
		if (!raw) return [];
		const entries = [];
		for (const [keyStr, actionStr] of Object.entries(raw)) {
			const trigger = decodeModeKeyTrigger(keyStr);
			if (!trigger) continue;
			const action = decodeKeyAction(actionStr);
			if (!action) continue;
			entries.push({
				trigger,
				action
			});
		}
		return entries;
	}
	/** Parse "ctrl+shift+j" → { keyCode, modifiers } */
	function decodeModeKeyTrigger(str) {
		const parts = str.split("+");
		let modifiers = 0;
		let keyNameIdx = 0;
		const modMap = {
			ctrl: KeyModifierFlags.CONTROL,
			shift: KeyModifierFlags.SHIFT,
			alt: KeyModifierFlags.ALT
		};
		for (let i = 0; i < parts.length; i++) {
			const mod = modMap[parts[i]];
			if (mod !== void 0) {
				modifiers |= mod;
				keyNameIdx = i + 1;
			} else break;
		}
		if (keyNameIdx >= parts.length) return null;
		const keyCode = hidNameToCode(parts.slice(keyNameIdx).join("+"));
		if (keyCode === void 0) return null;
		return {
			keyCode,
			modifiers
		};
	}
	/** Parse a KeyAction string from JSON */
	function decodeKeyAction(str) {
		switch (str) {
			case "convert": return { type: "convert" };
			case "confirm": return { type: "confirm" };
			case "cancel": return { type: "cancel" };
			case "deleteBack": return { type: "deleteBack" };
			case "switchToEnglish": return { type: "switchToEnglish" };
			case "switchToJapanese": return { type: "switchToJapanese" };
			case "toggleInputMode": return { type: "toggleInputMode" };
			case "pass": return { type: "pass" };
			default: return null;
		}
	}
	/** Filter out _comment keys from inputMappings */
	function filterComments(mappings) {
		if (!mappings) return void 0;
		const result = {};
		for (const [k, v] of Object.entries(mappings)) if (!k.startsWith("_comment")) result[k] = v;
		return Object.keys(result).length > 0 ? result : void 0;
	}
	//#endregion
	//#region src/engine/standard-romaji.ts
	const standardRomajiTable = {
		a: "あ",
		i: "い",
		u: "う",
		e: "え",
		o: "お",
		ka: "か",
		ki: "き",
		ku: "く",
		ke: "け",
		ko: "こ",
		ca: "か",
		ci: "し",
		cu: "く",
		ce: "せ",
		co: "こ",
		sa: "さ",
		si: "し",
		shi: "し",
		su: "す",
		se: "せ",
		so: "そ",
		ta: "た",
		ti: "ち",
		chi: "ち",
		tu: "つ",
		tsu: "つ",
		te: "て",
		to: "と",
		na: "な",
		ni: "に",
		nu: "ぬ",
		ne: "ね",
		no: "の",
		ha: "は",
		hi: "ひ",
		hu: "ふ",
		he: "へ",
		ho: "ほ",
		ma: "ま",
		mi: "み",
		mu: "む",
		me: "め",
		mo: "も",
		ya: "や",
		yu: "ゆ",
		yo: "よ",
		ra: "ら",
		ri: "り",
		ru: "る",
		re: "れ",
		ro: "ろ",
		wa: "わ",
		wi: "うぃ",
		we: "うぇ",
		wo: "を",
		wyi: "ゐ",
		wye: "ゑ",
		whu: "う",
		ga: "が",
		gi: "ぎ",
		gu: "ぐ",
		ge: "げ",
		go: "ご",
		za: "ざ",
		zi: "じ",
		ji: "じ",
		zu: "ず",
		ze: "ぜ",
		zo: "ぞ",
		da: "だ",
		di: "ぢ",
		du: "づ",
		dzu: "づ",
		de: "で",
		do: "ど",
		ba: "ば",
		bi: "び",
		bu: "ぶ",
		be: "べ",
		bo: "ぼ",
		pa: "ぱ",
		pi: "ぴ",
		pu: "ぷ",
		pe: "ぺ",
		po: "ぽ",
		ye: "いぇ",
		kya: "きゃ",
		kyu: "きゅ",
		kye: "きぇ",
		kyo: "きょ",
		sya: "しゃ",
		syu: "しゅ",
		sye: "しぇ",
		syo: "しょ",
		sha: "しゃ",
		shu: "しゅ",
		she: "しぇ",
		sho: "しょ",
		tya: "ちゃ",
		tyi: "ちぃ",
		tyu: "ちゅ",
		tye: "ちぇ",
		tyo: "ちょ",
		cha: "ちゃ",
		chu: "ちゅ",
		che: "ちぇ",
		cho: "ちょ",
		cya: "ちゃ",
		cyi: "ちぃ",
		cyu: "ちゅ",
		cye: "ちぇ",
		cyo: "ちょ",
		nya: "にゃ",
		nyi: "にぃ",
		nyu: "にゅ",
		nye: "にぇ",
		nyo: "にょ",
		hya: "ひゃ",
		hyi: "ひぃ",
		hyu: "ひゅ",
		hye: "ひぇ",
		hyo: "ひょ",
		mya: "みゃ",
		myi: "みぃ",
		myu: "みゅ",
		mye: "みぇ",
		myo: "みょ",
		rya: "りゃ",
		ryi: "りぃ",
		ryu: "りゅ",
		rye: "りぇ",
		ryo: "りょ",
		gya: "ぎゃ",
		gyu: "ぎゅ",
		gye: "ぎぇ",
		gyo: "ぎょ",
		zya: "じゃ",
		zyu: "じゅ",
		zye: "じぇ",
		zyo: "じょ",
		ja: "じゃ",
		ju: "じゅ",
		je: "じぇ",
		jo: "じょ",
		jya: "じゃ",
		jyi: "じぃ",
		jyu: "じゅ",
		jye: "じぇ",
		jyo: "じょ",
		bya: "びゃ",
		byi: "びぃ",
		byu: "びゅ",
		bye: "びぇ",
		byo: "びょ",
		pya: "ぴゃ",
		pyi: "ぴぃ",
		pyu: "ぴゅ",
		pye: "ぴぇ",
		pyo: "ぴょ",
		dya: "ぢゃ",
		dyi: "ぢぃ",
		dyu: "ぢゅ",
		dye: "ぢぇ",
		dyo: "ぢょ",
		fa: "ふぁ",
		fi: "ふぃ",
		fu: "ふ",
		fe: "ふぇ",
		fo: "ふぉ",
		fya: "ふゃ",
		fyu: "ふゅ",
		fyo: "ふょ",
		fwa: "ふぁ",
		fwi: "ふぃ",
		fwu: "ふぅ",
		fwe: "ふぇ",
		fwo: "ふぉ",
		hwa: "ふぁ",
		hwi: "ふぃ",
		hwe: "ふぇ",
		hwo: "ふぉ",
		va: "ヴぁ",
		vi: "ヴぃ",
		vu: "ヴ",
		ve: "ヴぇ",
		vo: "ヴぉ",
		vya: "ゔゃ",
		vyu: "ゔゅ",
		vyo: "ゔょ",
		tha: "てゃ",
		thi: "てぃ",
		thu: "てゅ",
		the: "てぇ",
		tho: "てょ",
		dha: "でゃ",
		dhi: "でぃ",
		dhu: "でゅ",
		dhe: "でぇ",
		dho: "でょ",
		swa: "すぁ",
		swi: "すぃ",
		swu: "すぅ",
		swe: "すぇ",
		swo: "すぉ",
		twa: "とぁ",
		twi: "とぃ",
		twu: "とぅ",
		twe: "とぇ",
		two: "とぉ",
		dwa: "どぁ",
		dwi: "どぃ",
		dwu: "どぅ",
		dwe: "どぇ",
		dwo: "どぉ",
		tsa: "つぁ",
		tsi: "つぃ",
		tse: "つぇ",
		tso: "つぉ",
		wha: "うぁ",
		whi: "うぃ",
		whe: "うぇ",
		who: "うぉ",
		kwa: "くぁ",
		kwi: "くぃ",
		kwu: "くぅ",
		kwe: "くぇ",
		kwo: "くぉ",
		qa: "くぁ",
		qi: "くぃ",
		qu: "くぅ",
		qe: "くぇ",
		qo: "くぉ",
		qwa: "くぁ",
		qwi: "くぃ",
		qwu: "くぅ",
		qwe: "くぇ",
		qwo: "くぉ",
		gwa: "ぐぁ",
		gwi: "ぐぃ",
		gwu: "ぐぅ",
		gwe: "ぐぇ",
		gwo: "ぐぉ",
		xka: "ヵ",
		xke: "ヶ",
		lka: "ヵ",
		lke: "ヶ",
		n: "ん",
		nn: "ん",
		"n'": "ん",
		xn: "ん",
		kka: "っか",
		kki: "っき",
		kku: "っく",
		kke: "っけ",
		kko: "っこ",
		kkya: "っきゃ",
		kkyu: "っきゅ",
		kkye: "っきぇ",
		kkyo: "っきょ",
		kkwa: "っくぁ",
		kkwi: "っくぃ",
		kkwu: "っくぅ",
		kkwe: "っくぇ",
		kkwo: "っくぉ",
		ssa: "っさ",
		ssi: "っし",
		ssu: "っす",
		sse: "っせ",
		sso: "っそ",
		ssha: "っしゃ",
		sshi: "っし",
		sshu: "っしゅ",
		sshe: "っしぇ",
		ssho: "っしょ",
		ssya: "っしゃ",
		ssyu: "っしゅ",
		ssye: "っしぇ",
		ssyo: "っしょ",
		sswa: "っすぁ",
		sswi: "っすぃ",
		sswu: "っすぅ",
		sswe: "っすぇ",
		sswo: "っすぉ",
		tta: "った",
		tti: "っち",
		ttu: "っつ",
		tte: "って",
		tto: "っと",
		ttya: "っちゃ",
		ttyi: "っちぃ",
		ttyu: "っちゅ",
		ttye: "っちぇ",
		ttyo: "っちょ",
		tcha: "っちゃ",
		tchi: "っち",
		tchu: "っちゅ",
		tche: "っちぇ",
		tcho: "っちょ",
		ttsa: "っつぁ",
		ttsi: "っつぃ",
		ttse: "っつぇ",
		ttso: "っつぉ",
		ttha: "ってゃ",
		tthi: "ってぃ",
		tthu: "ってゅ",
		tthe: "ってぇ",
		ttho: "ってょ",
		ttwa: "っとぁ",
		ttwi: "っとぃ",
		ttwu: "っとぅ",
		ttwe: "っとぇ",
		ttwo: "っとぉ",
		hha: "っは",
		hhi: "っひ",
		hhu: "っふ",
		hhe: "っへ",
		hho: "っほ",
		hhya: "っひゃ",
		hhyi: "っひぃ",
		hhyu: "っひゅ",
		hhye: "っひぇ",
		hhyo: "っひょ",
		mma: "っま",
		mmi: "っみ",
		mmu: "っむ",
		mme: "っめ",
		mmo: "っも",
		mmya: "っみゃ",
		mmyi: "っみぃ",
		mmyu: "っみゅ",
		mmye: "っみぇ",
		mmyo: "っみょ",
		rra: "っら",
		rri: "っり",
		rru: "っる",
		rre: "っれ",
		rro: "っろ",
		rrya: "っりゃ",
		rryi: "っりぃ",
		rryu: "っりゅ",
		rrye: "っりぇ",
		rryo: "っりょ",
		gga: "っが",
		ggi: "っぎ",
		ggu: "っぐ",
		gge: "っげ",
		ggo: "っご",
		ggya: "っぎゃ",
		ggyu: "っぎゅ",
		ggye: "っぎぇ",
		ggyo: "っぎょ",
		ggwa: "っぐぁ",
		ggwi: "っぐぃ",
		ggwu: "っぐぅ",
		ggwe: "っぐぇ",
		ggwo: "っぐぉ",
		zza: "っざ",
		zzi: "っじ",
		zzu: "っず",
		zze: "っぜ",
		zzo: "っぞ",
		zzya: "っじゃ",
		zzyu: "っじゅ",
		zzye: "っじぇ",
		zzyo: "っじょ",
		dda: "っだ",
		ddi: "っぢ",
		ddu: "っづ",
		dde: "っで",
		ddo: "っど",
		ddzu: "っづ",
		ddya: "っぢゃ",
		ddyi: "っぢぃ",
		ddyu: "っぢゅ",
		ddye: "っぢぇ",
		ddyo: "っぢょ",
		ddha: "っでゃ",
		ddhi: "っでぃ",
		ddhu: "っでゅ",
		ddhe: "っでぇ",
		ddho: "っでょ",
		ddwa: "っどぁ",
		ddwi: "っどぃ",
		ddwu: "っどぅ",
		ddwe: "っどぇ",
		ddwo: "っどぉ",
		bba: "っば",
		bbi: "っび",
		bbu: "っぶ",
		bbe: "っべ",
		bbo: "っぼ",
		bbya: "っびゃ",
		bbyi: "っびぃ",
		bbyu: "っびゅ",
		bbye: "っびぇ",
		bbyo: "っびょ",
		ppa: "っぱ",
		ppi: "っぴ",
		ppu: "っぷ",
		ppe: "っぺ",
		ppo: "っぽ",
		ppya: "っぴゃ",
		ppyi: "っぴぃ",
		ppyu: "っぴゅ",
		ppye: "っぴぇ",
		ppyo: "っぴょ",
		ffa: "っふぁ",
		ffi: "っふぃ",
		ffu: "っふ",
		ffe: "っふぇ",
		ffo: "っふぉ",
		ffya: "っふゃ",
		ffyu: "っふゅ",
		ffyo: "っふょ",
		ffwa: "っふぁ",
		ffwi: "っふぃ",
		ffwu: "っふぅ",
		ffwe: "っふぇ",
		ffwo: "っふぉ",
		jja: "っじゃ",
		jji: "っじ",
		jju: "っじゅ",
		jje: "っじぇ",
		jjo: "っじょ",
		jjyi: "っじぃ",
		jjya: "っじゃ",
		jjyu: "っじゅ",
		jjye: "っじぇ",
		jjyo: "っじょ",
		cca: "っか",
		cci: "っち",
		ccu: "っく",
		cce: "っけ",
		cco: "っこ",
		ccha: "っちゃ",
		cchi: "っち",
		cchu: "っちゅ",
		cche: "っちぇ",
		ccho: "っちょ",
		ccya: "っちゃ",
		ccyi: "っちぃ",
		ccyu: "っちゅ",
		ccye: "っちぇ",
		ccyo: "っちょ",
		vvu: "っゔ",
		vva: "っゔぁ",
		vvi: "っゔぃ",
		vve: "っゔぇ",
		vvo: "っゔぉ",
		vvya: "っゔゃ",
		vvyu: "っゔゅ",
		vvyo: "っゔょ",
		xa: "ぁ",
		xi: "ぃ",
		xu: "ぅ",
		xe: "ぇ",
		xo: "ぉ",
		xya: "ゃ",
		xyu: "ゅ",
		xyo: "ょ",
		xtu: "っ",
		xtsu: "っ",
		xwa: "ゎ",
		la: "ぁ",
		li: "ぃ",
		lu: "ぅ",
		le: "ぇ",
		lo: "ぉ",
		lya: "ゃ",
		lyu: "ゅ",
		lyo: "ょ",
		ltu: "っ",
		ltsu: "っ",
		lwa: "ゎ"
	};
	/** Half-width → full-width character map (US keyboard)
	*  Port of DefaultKeymaps.h2zMapUS */
	const h2zMapUS = {
		"0": "０",
		"1": "１",
		"2": "２",
		"3": "３",
		"4": "４",
		"5": "５",
		"6": "６",
		"7": "７",
		"8": "８",
		"9": "９",
		",": "、",
		".": "。",
		"/": "・",
		"[": "「",
		"]": "」",
		"{": "『",
		"}": "』",
		"(": "（",
		")": "）",
		"<": "＜",
		">": "＞",
		"-": "ー",
		"~": "〜",
		"^": "＾",
		"_": "＿",
		"\"": "”",
		"'": "’",
		"`": "｀",
		"+": "＋",
		"=": "＝",
		"*": "＊",
		"!": "！",
		"?": "？",
		":": "：",
		";": "；",
		"@": "＠",
		"#": "＃",
		"$": "＄",
		"%": "％",
		"&": "＆",
		"|": "｜",
		"\\": "＼",
		"¥": "￥"
	};
	//#endregion
	//#region src/engine/keymap-expander.ts
	/** Expand a KeymapDefinition into an ExpandedKeymap with pre-computed lookup data */
	function expandKeymap(def) {
		const inputMappings = expandInputMappings(def.inputBase, def.suffixRules, def.inputMappings);
		const prefixSet = buildPrefixSet(inputMappings);
		const charMapBase = def.inputBase === "romaji" ? h2zMapUS : {};
		const characterMap = def.behavior.type === "sequential" ? {
			...charMapBase,
			...def.behavior.characterMap
		} : {};
		const chordData = def.behavior.type === "chord" ? expandChordData(def.behavior.config) : void 0;
		return {
			definition: def,
			inputMappings,
			prefixSet,
			characterMap,
			modeKeys: def.modeKeys ?? [],
			keyRemap: def.keyRemap ?? {},
			chordData
		};
	}
	/** Expand input mappings: base + suffix rules + explicit mappings
	*  Port of KeymapDefinition.expandInputMappings */
	function expandInputMappings(inputBase, suffixRules, explicitMappings) {
		let base = {};
		if (inputBase === "romaji") base = { ...standardRomajiTable };
		const allEntries = { ...base };
		if (explicitMappings) {
			for (const [k, v] of Object.entries(explicitMappings)) if (!k.startsWith("_comment")) allEntries[k] = v;
		}
		const vowels = /* @__PURE__ */ new Set([
			"a",
			"i",
			"u",
			"e",
			"o"
		]);
		const suffixExpansions = {};
		if (suffixRules && Object.keys(suffixRules).length > 0) for (const [romajiSeq, kanaOutput] of Object.entries(allEntries)) {
			const lastChar = romajiSeq[romajiSeq.length - 1];
			if (!lastChar || !vowels.has(lastChar)) continue;
			const consonantPrefix = romajiSeq.slice(0, -1);
			if (consonantPrefix.length === 0) continue;
			for (const [suffixKey, rule] of Object.entries(suffixRules)) {
				if (lastChar !== rule.vowel) continue;
				const expandedKey = consonantPrefix + suffixKey;
				suffixExpansions[expandedKey] = kanaOutput + rule.suffix;
			}
		}
		const result = { ...base };
		for (const [k, v] of Object.entries(suffixExpansions)) result[k] = v;
		if (explicitMappings) {
			for (const [k, v] of Object.entries(explicitMappings)) if (!k.startsWith("_comment")) result[k] = v;
		}
		return result;
	}
	/** Build a set of all prefixes of mapping keys (for greedy longest-match) */
	function buildPrefixSet(mappings) {
		const prefixes = /* @__PURE__ */ new Set();
		for (const key of Object.keys(mappings)) for (let i = 1; i < key.length; i++) prefixes.add(key.slice(0, i));
		return prefixes;
	}
	/** Create an ExpandedKeymap for the built-in romaji (US) layout */
	function createBuiltinRomajiUS() {
		return expandKeymap({
			formatVersion: "1.0",
			name: "ローマ字(QWERTY US)",
			description: "標準ローマ字入力（US キーボード）",
			keyboardLayout: "us",
			targetScript: "hiragana",
			behavior: {
				type: "sequential",
				characterMap: h2zMapUS
			},
			inputBase: "romaji",
			modeKeys: [{
				trigger: {
					keyCode: 44,
					modifiers: 2
				},
				action: { type: "toggleInputMode" }
			}]
		});
	}
	/** Create an ExpandedKeymap for the built-in romaji (JIS) layout */
	function createBuiltinRomajiJIS() {
		return expandKeymap({
			formatVersion: "1.0",
			name: "ローマ字(QWERTY JIS)",
			description: "標準ローマ字入力（JIS キーボード）",
			keyboardLayout: "jis",
			targetScript: "hiragana",
			behavior: {
				type: "sequential",
				characterMap: h2zMapUS
			},
			inputBase: "romaji",
			modeKeys: [
				{
					trigger: {
						keyCode: 145,
						modifiers: 0
					},
					action: { type: "switchToEnglish" }
				},
				{
					trigger: {
						keyCode: 144,
						modifiers: 0
					},
					action: { type: "switchToJapanese" }
				},
				{
					trigger: {
						keyCode: 44,
						modifiers: 2
					},
					action: { type: "toggleInputMode" }
				}
			]
		});
	}
	/** ChordKey name → bit index (matches Swift enum rawValue) */
	const CHORD_KEY_BIT_INDEX = {
		Q: 0,
		W: 1,
		E: 2,
		R: 3,
		T: 4,
		Y: 5,
		U: 6,
		I: 7,
		O: 8,
		P: 9,
		A: 10,
		S: 11,
		D: 12,
		F: 13,
		G: 14,
		H: 15,
		J: 16,
		K: 17,
		L: 18,
		semicolon: 19,
		Z: 20,
		X: 21,
		C: 22,
		V: 23,
		B: 24,
		N: 25,
		M: 26,
		comma: 27,
		dot: 28,
		slash: 29,
		space: 30,
		leftThumb: 31,
		rightThumb: 32
	};
	/** Parse a lookup key like "leftThumb+W" → combined bitmask */
	function parseLookupKey(key, keyBits) {
		const parts = key.split("+");
		let bits = 0;
		for (const part of parts) {
			const b = keyBits.get(part);
			if (b === void 0) return void 0;
			bits += b;
		}
		return bits;
	}
	/** Parse a special action string → KeyAction */
	function parseSpecialAction(str) {
		switch (str) {
			case "deleteBack": return { type: "deleteBack" };
			case "confirm": return { type: "confirm" };
			case "cancel": return { type: "cancel" };
			case "convert": return { type: "convert" };
			case "moveLeft": return { type: "moveLeft" };
			case "moveRight": return { type: "moveRight" };
			case "moveUp": return { type: "moveUp" };
			case "moveDown": return { type: "moveDown" };
			case "switchToEnglish": return { type: "switchToEnglish" };
			case "switchToJapanese": return { type: "switchToJapanese" };
			case "editSegmentLeft": return { type: "editSegmentLeft" };
			case "editSegmentRight": return { type: "editSegmentRight" };
			default:
				if (str.startsWith("insertAndConfirm:")) return {
					type: "insertAndConfirm",
					text: str.slice(17)
				};
				return null;
		}
	}
	/** Expand chord config into ExpandedChordData */
	function expandChordData(config) {
		const keyBits = /* @__PURE__ */ new Map();
		for (const [name, idx] of Object.entries(CHORD_KEY_BIT_INDEX)) keyBits.set(name, 2 ** idx);
		const hidToChordKey = /* @__PURE__ */ new Map();
		for (const [hidName, chordKeyName] of Object.entries(config.hidToKey)) {
			const hid = hidNameToCode(hidName);
			if (hid !== void 0) hidToChordKey.set(hid, chordKeyName);
		}
		const lookupTable = /* @__PURE__ */ new Map();
		for (const [keyStr, output] of Object.entries(config.lookupTable)) {
			const bits = parseLookupKey(keyStr, keyBits);
			if (bits !== void 0) lookupTable.set(bits, output);
		}
		const specialActions = /* @__PURE__ */ new Map();
		for (const [keyStr, actionStr] of Object.entries(config.specialActions)) {
			const bits = parseLookupKey(keyStr, keyBits);
			const action = parseSpecialAction(actionStr);
			if (bits !== void 0 && action) specialActions.set(bits, action);
		}
		const shiftKeys = /* @__PURE__ */ new Set();
		const shiftSingleTapActions = /* @__PURE__ */ new Map();
		for (const sk of config.shiftKeys) {
			shiftKeys.add(sk.key);
			if (sk.singleTapAction) {
				const action = parseSpecialAction(sk.singleTapAction);
				if (action) shiftSingleTapActions.set(sk.key, action);
			}
		}
		let englishLookupTable = null;
		if (config.englishLookupTable) {
			englishLookupTable = /* @__PURE__ */ new Map();
			for (const [keyStr, output] of Object.entries(config.englishLookupTable)) {
				const bits = parseLookupKey(keyStr, keyBits);
				if (bits !== void 0) englishLookupTable.set(bits, output);
			}
		}
		let englishSpecialActions = null;
		if (config.englishSpecialActions) {
			englishSpecialActions = /* @__PURE__ */ new Map();
			for (const [keyStr, actionStr] of Object.entries(config.englishSpecialActions)) {
				const bits = parseLookupKey(keyStr, keyBits);
				const action = parseSpecialAction(actionStr);
				if (bits !== void 0 && action) englishSpecialActions.set(bits, action);
			}
		}
		return {
			hidToChordKey,
			lookupTable,
			specialActions,
			shiftKeys,
			shiftSingleTapActions,
			keyBits,
			judgment: config.judgment ?? "window",
			simultaneousWindow: Math.round(config.simultaneousWindow * 1e3),
			englishLookupTable,
			englishSpecialActions
		};
	}
	//#endregion
	//#region src/engine/version.ts
	const ENGINE_VERSION = "1.6.0";
	//#endregion
	//#region src/engine/key-router.ts
	/** Route a KeyEvent to a KeyAction based on the expanded keymap */
	function routeKey(event, keymap, isComposing, state, isDirectEnglishMode) {
		const modeAction = matchModeKey(event, keymap);
		if (modeAction) return modeAction;
		if (event.keyCode === HID.BACKSPACE && !(event.modifiers & (KeyModifierFlags.META | KeyModifierFlags.ALT))) return { type: "deleteBack" };
		if (isComposing && event.modifiers & KeyModifierFlags.CONTROL) return routeControlKey(event);
		if (isComposing) {
			const ctrlAction = routeStandardControlKey(event, state, keymap.chordData ? isChordShiftKeyCode(event.keyCode, keymap.chordData) : false);
			if (ctrlAction) return ctrlAction;
		}
		if (keymap.chordData) return routeChord(event, keymap.chordData, isDirectEnglishMode);
		if (!isComposing && !isDirectEnglishMode && event.keyCode === HID.SPACE) return {
			type: "insertSpace",
			shifted: !!(event.modifiers & KeyModifierFlags.SHIFT)
		};
		return routeSequential(event, keymap, isComposing, isDirectEnglishMode);
	}
	/** Match modeKeys triggers */
	function matchModeKey(event, keymap) {
		const eventMods = event.modifiers & (KeyModifierFlags.SHIFT | KeyModifierFlags.CONTROL | KeyModifierFlags.ALT);
		for (const entry of keymap.modeKeys) {
			const t = entry.trigger;
			if (t.keyCode !== event.keyCode) continue;
			if (t.modifiers !== 0) {
				if (t.modifiers === eventMods) return entry.action;
			} else return entry.action;
		}
		return null;
	}
	/** Ctrl+key → simplified Emacs bindings */
	function routeControlKey(event) {
		switch (event.keyCode) {
			case HID.H: return { type: "deleteBack" };
			case HID.M: return { type: "confirm" };
			case HID.G: return { type: "cancel" };
			case HID.J: return { type: "confirm" };
			default: return { type: "pass" };
		}
	}
	/** Standard control keys during composing */
	function routeStandardControlKey(event, _state, isChordShiftKey = false) {
		if (isChordShiftKey) return null;
		switch (event.keyCode) {
			case HID.ENTER:
			case HID.TAB: return { type: "confirm" };
			case HID.ESCAPE: return { type: "cancel" };
			case HID.SPACE: return { type: "convert" };
			case HID.BACKSPACE: return { type: "deleteBack" };
			default: return null;
		}
	}
	/** Sequential input routing */
	function routeSequential(event, keymap, isComposing, isDirectEnglishMode) {
		if (isDirectEnglishMode) {
			const chars = event.characters;
			if (chars.length === 1 && isPrintable(chars)) return {
				type: "directInsert",
				text: chars
			};
			return { type: "pass" };
		}
		const chars = event.characters;
		if (chars.length !== 1) return { type: "pass" };
		const c = chars;
		const logical = keymap.keyRemap[c] ?? c;
		if (keymap.characterMap[logical] || isLetter(logical) || isComposing && isDigit(logical)) return {
			type: "printable",
			char: c
		};
		if (Object.keys(keymap.inputMappings).length > 0 && isPrintable(c) && c !== " ") return {
			type: "printable",
			char: c
		};
		return { type: "pass" };
	}
	function isPrintable(c) {
		if (c.length !== 1) return false;
		const code = c.charCodeAt(0);
		return code >= 32 && code !== 127;
	}
	function isLetter(c) {
		if (c.length !== 1) return false;
		return /^[a-zA-Z]$/.test(c);
	}
	function isDigit(c) {
		if (c.length !== 1) return false;
		return /^[0-9]$/.test(c);
	}
	/** Check if a HID key code maps to a chord shift key */
	function isChordShiftKeyCode(keyCode, chord) {
		const chordKey = chord.hidToChordKey.get(keyCode);
		if (!chordKey) return false;
		return chord.shiftKeys.has(chordKey);
	}
	/** Route a key event for chord behavior */
	function routeChord(event, chord, isDirectEnglishMode) {
		if (isDirectEnglishMode) {
			const noModifiers = (event.modifiers & (KeyModifierFlags.SHIFT | KeyModifierFlags.CONTROL | KeyModifierFlags.ALT | KeyModifierFlags.META)) === 0;
			if (chord.englishLookupTable !== null && noModifiers) {
				const chordKey = chord.hidToChordKey.get(event.keyCode);
				if (chordKey) {
					if (chord.shiftKeys.has(chordKey)) return {
						type: "chordShiftDown",
						key: chordKey
					};
					return {
						type: "chordInput",
						key: chordKey
					};
				}
			}
			const chars = event.characters;
			if (chars.length === 1 && isPrintable(chars)) return {
				type: "directInsert",
				text: chars
			};
			return { type: "pass" };
		}
		const chordKey = chord.hidToChordKey.get(event.keyCode);
		if (!chordKey) return { type: "pass" };
		if (chord.shiftKeys.has(chordKey)) return {
			type: "chordShiftDown",
			key: chordKey
		};
		return {
			type: "chordInput",
			key: chordKey
		};
	}
	//#endregion
	//#region src/engine/sequential-buffer.ts
	/** Sequential input buffer with greedy longest-match resolution */
	var SequentialBuffer = class {
		constructor() {
			this.buffer = "";
			this.mappings = {};
			this.prefixSet = /* @__PURE__ */ new Set();
			this.resolvedKana = "";
		}
		/** Update the mapping tables (call when keymap changes) */
		setMappings(mappings, prefixSet) {
			this.mappings = mappings;
			this.prefixSet = prefixSet;
			this.buffer = "";
			this.resolvedKana = "";
		}
		/** Add a character to the buffer and drain resolved kana.
		*  Returns the newly resolved kana (may be empty if waiting for more input). */
		input(char) {
			this.buffer += char;
			return this.drain();
		}
		/** Force-flush the buffer (before confirm/cancel).
		*  Returns any remaining kana. */
		flush() {
			if (this.buffer.length === 0) return "";
			const exact = this.mappings[this.buffer];
			if (exact !== void 0) {
				this.buffer = "";
				return exact;
			}
			return this.drain(true);
		}
		/** Delete the last character from the buffer.
		*  Returns true if a buffer character was deleted, false if buffer was empty. */
		deleteBack() {
			if (this.buffer.length > 0) {
				this.buffer = this.buffer.slice(0, -1);
				return true;
			}
			return false;
		}
		/** BS の pending 復帰用: 未解決文字列をバッファ先頭へ戻す（repend が使う） */
		restore(text) {
			this.buffer = text + this.buffer;
		}
		/** Get current pending buffer text (for display) */
		get pending() {
			return this.buffer;
		}
		/** Get pending buffer resolved as kana for display (pendingBufferText port) */
		get pendingDisplay() {
			if (this.buffer.length === 0) return "";
			const exact = this.mappings[this.buffer];
			if (exact !== void 0) return exact;
			let result = "";
			let remaining = this.buffer;
			while (remaining.length > 0) {
				let matched = false;
				for (let len = remaining.length; len >= 1; len--) {
					const prefix = remaining.slice(0, len);
					const kana = this.mappings[prefix];
					if (kana !== void 0) {
						result += kana;
						remaining = remaining.slice(len);
						matched = true;
						break;
					}
				}
				if (!matched) {
					result += remaining[0];
					remaining = remaining.slice(1);
				}
			}
			return result;
		}
		/** Whether the buffer is empty */
		get isEmpty() {
			return this.buffer.length === 0;
		}
		/** Reset buffer state */
		reset() {
			this.buffer = "";
			this.resolvedKana = "";
		}
		/** Drain the buffer using greedy longest-match + backtracking.
		*  Port of drainSequentialBuffer (InputManager.swift L477-515) */
		drain(force = false) {
			let output = "";
			while (this.buffer.length > 0) {
				const hasMatch = this.mappings[this.buffer] !== void 0;
				const isPrefix = this.prefixSet.has(this.buffer);
				if (hasMatch && (!isPrefix || force)) {
					output += this.mappings[this.buffer];
					this.buffer = "";
				} else if (isPrefix && !force) return output;
				else {
					let resolved = false;
					for (let len = this.buffer.length - 1; len >= 1; len--) {
						const prefix = this.buffer.slice(0, len);
						if (this.mappings[prefix] !== void 0) {
							output += this.mappings[prefix];
							this.buffer = this.buffer.slice(len);
							resolved = true;
							break;
						}
					}
					if (!resolved) {
						output += this.buffer[0];
						this.buffer = this.buffer.slice(1);
					}
				}
			}
			return output;
		}
	};
	//#endregion
	//#region src/engine/simultaneous-buffer.ts
	/**
	* Simultaneous key buffer — eager output + rollback.
	*
	* 1st key → output single-hit immediately (0ms delay)
	* 2nd key within window → rollback and replace with chord result
	* 3rd key within window → try triple chord, else confirm and start fresh
	* Shift key → no eager output, wait for timer
	*/
	var SimultaneousKeyBuffer = class SimultaneousKeyBuffer {
		static {
			this.EMPTY_LOOKUP = /* @__PURE__ */ new Map();
		}
		static {
			this.EMPTY_SPECIALS = /* @__PURE__ */ new Map();
		}
		/** 現在のモードの lookup テーブル */
		lookup() {
			return this.englishMode ? this.chord.englishLookupTable ?? SimultaneousKeyBuffer.EMPTY_LOOKUP : this.chord.lookupTable;
		}
		/** 現在のモードの specialActions テーブル */
		specials() {
			return this.englishMode ? this.chord.englishSpecialActions ?? SimultaneousKeyBuffer.EMPTY_SPECIALS : this.chord.specialActions;
		}
		constructor(chord) {
			this.state = { type: "idle" };
			this.timerId = null;
			this.pressedKeys = /* @__PURE__ */ new Set();
			this.windowOverride = null;
			this.englishMode = false;
			this.onOutput = null;
			this.onShiftSingle = null;
			this.onSpecialAction = null;
			this.mutualOrder = [];
			this.mutualGroup = /* @__PURE__ */ new Set();
			this.mutualCharCount = 0;
			this.mutualPending = null;
			this.mutualOutputted = false;
			this.chord = chord;
		}
		/** Process key down */
		keyDown(key) {
			if (this.chord.judgment === "mutual") {
				this.mutualKeyDown(key);
				return;
			}
			this.pressedKeys.add(key);
			switch (this.state.type) {
				case "idle":
					this.handleFirstKey(key);
					break;
				case "waiting":
					this.handleSecondKey(key, this.state.firstKey, this.state.firstOutput, this.state.firstCharCount);
					break;
				case "waitingThird":
					this.handleThirdKey(key, this.state.bufferedKeys, this.state.bits, this.state.charCount, this.state.pendingAction);
					break;
				case "shiftHeld":
					this.handleShiftHeldKey(key, this.state.shiftKey, this.state.used);
					break;
			}
		}
		/** Process key up */
		keyUp(key) {
			if (this.chord.judgment === "mutual") {
				this.mutualKeyUp(key);
				return;
			}
			this.pressedKeys.delete(key);
			if (this.state.type === "shiftHeld" && this.state.shiftKey === key) {
				if (!this.state.used) {
					const action = this.chord.shiftSingleTapActions.get(key);
					if (action) this.onShiftSingle?.(action);
				}
				this.state = { type: "idle" };
			}
		}
		/** Reset buffer */
		reset() {
			this.cancelTimer();
			this.state = { type: "idle" };
			this.clearMutualGroup();
		}
		/**
		* 相互シフト方式の keyDown。
		* 「押下中キー集合 + 新キー」の組合せがテーブルにあるかだけで chord / fall-through を判定する。
		*/
		mutualKeyDown(key) {
			if (this.pressedKeys.has(key)) return;
			this.pressedKeys.add(key);
			const bit = this.getBit(key);
			if (bit === void 0) return;
			if (this.mutualGroup.has(key)) {
				this.resolveMutualGroup();
				this.startMutualGroup(key);
				return;
			}
			if (this.mutualGroup.size === 0) {
				this.startMutualGroup(key);
				return;
			}
			let candidate = bit;
			for (const k of this.mutualGroup) candidate += this.getBit(k) ?? 0;
			if (this.lookup().has(candidate) || this.specials().has(candidate)) {
				this.mutualGroup.add(key);
				this.mutualOrder.push(key);
				this.evaluateMutualChord(candidate);
			} else {
				this.resolveMutualGroup();
				this.startMutualGroup(key);
			}
		}
		/** 相互シフト方式の keyUp */
		mutualKeyUp(key) {
			this.pressedKeys.delete(key);
			if (this.pressedKeys.size === 0) {
				this.finalizeMutual();
				return;
			}
			if (this.mutualGroup.has(key) && (this.mutualOutputted || this.mutualPending !== null)) {
				const pending = this.mutualPending;
				if (pending !== null) {
					this.mutualPending = null;
					this.mutualOutputted = true;
				}
				this.mutualGroup.delete(key);
				const idx = this.mutualOrder.indexOf(key);
				if (idx >= 0) this.mutualOrder.splice(idx, 1);
				this.mutualCharCount = 0;
				if (pending !== null) this.onSpecialAction?.(pending);
			}
		}
		/** グループを chord 評価する（lookup 優先、なければ specialAction を保留） */
		evaluateMutualChord(bits) {
			const text = this.lookup().get(bits);
			if (text !== void 0) {
				this.onOutput?.(text, this.mutualCharCount);
				this.mutualCharCount = text.length;
				this.mutualPending = null;
				this.mutualOutputted = true;
				return;
			}
			const action = this.specials().get(bits);
			if (action) {
				if (this.mutualCharCount > 0) {
					this.onOutput?.("", this.mutualCharCount);
					this.mutualCharCount = 0;
				}
				this.mutualPending = action;
				this.mutualOutputted = false;
			}
		}
		/**
		* 現グループを解決する（fall-through / グループ在籍キー再打鍵時）。
		* chord 出力済みなら何もしない。specialAction 保留中なら発火。
		* 未出力なら押下順に単打出力する。解決後グループは空（disarm）。
		*/
		resolveMutualGroup() {
			if (this.mutualPending !== null) this.onSpecialAction?.(this.mutualPending);
			else if (!this.mutualOutputted) for (const k of this.mutualOrder) this.mutualSingleTap(k);
			this.clearMutualGroup();
		}
		/** 全キーリリース時の確定。単打はここで出力される（chord は keyDown 時に出力済み） */
		finalizeMutual() {
			if (this.mutualGroup.size === 1) {
				if (!this.mutualOutputted) {
					const only = this.mutualOrder[0];
					if (only !== void 0) this.mutualSingleTap(only);
				}
			} else if (this.mutualGroup.size >= 2) {
				if (this.mutualPending !== null) this.onSpecialAction?.(this.mutualPending);
				else if (!this.mutualOutputted) for (const k of this.mutualOrder) this.mutualSingleTap(k);
			}
			this.clearMutualGroup();
		}
		/** 単打出力（シフトキー → 単打アクション、specialAction 優先、なければ文字） */
		mutualSingleTap(key) {
			if (this.chord.shiftKeys.has(key)) {
				const action = this.chord.shiftSingleTapActions.get(key);
				if (action) this.onShiftSingle?.(action);
				return;
			}
			const bit = this.getBit(key);
			if (bit === void 0) return;
			const action = this.specials().get(bit);
			if (action) {
				this.onSpecialAction?.(action);
				return;
			}
			const text = this.lookup().get(bit);
			if (text !== void 0) this.onOutput?.(text, 0);
		}
		startMutualGroup(key) {
			this.mutualGroup = /* @__PURE__ */ new Set([key]);
			this.mutualOrder = [key];
		}
		clearMutualGroup() {
			this.mutualGroup.clear();
			this.mutualOrder = [];
			this.mutualCharCount = 0;
			this.mutualPending = null;
			this.mutualOutputted = false;
		}
		handleFirstKey(key) {
			const bits = this.getBit(key);
			if (!bits) return;
			if (this.chord.shiftKeys.has(key)) {
				this.state = {
					type: "waiting",
					firstKey: key,
					firstOutput: null,
					firstCharCount: 0
				};
				this.startTimer();
			} else {
				const singleChar = this.lookup().get(bits);
				if (singleChar) {
					this.onOutput?.(singleChar, 0);
					this.state = {
						type: "waiting",
						firstKey: key,
						firstOutput: singleChar,
						firstCharCount: singleChar.length
					};
					this.startTimer();
				} else {
					this.state = {
						type: "waiting",
						firstKey: key,
						firstOutput: null,
						firstCharCount: 0
					};
					this.startTimer();
				}
			}
		}
		handleSecondKey(key, firstKey, firstOutput, firstCharCount) {
			this.cancelTimer();
			if (key === firstKey) {
				this.state = { type: "idle" };
				this.handleFirstKey(key);
				return;
			}
			const firstBit = this.getBit(firstKey);
			const keyBit = this.getBit(key);
			if (!firstBit || !keyBit) return;
			const combined = firstBit + keyBit;
			const specialAction = this.specials().get(combined);
			if (specialAction) {
				if (firstCharCount > 0) this.onOutput?.("", firstCharCount);
				const keys = /* @__PURE__ */ new Set([firstKey, key]);
				this.state = {
					type: "waitingThird",
					bufferedKeys: keys,
					bits: combined,
					charCount: 0,
					pendingAction: specialAction
				};
				this.startTimer();
				return;
			}
			const simultaneousResult = this.lookup().get(combined);
			if (simultaneousResult) {
				if (firstCharCount > 0) this.onOutput?.(simultaneousResult, firstCharCount);
				else this.onOutput?.(simultaneousResult, 0);
				const keys = /* @__PURE__ */ new Set([firstKey, key]);
				this.state = {
					type: "waitingThird",
					bufferedKeys: keys,
					bits: combined,
					charCount: simultaneousResult.length,
					pendingAction: null
				};
				this.startTimer();
			} else if (firstOutput === null) {
				if (this.chord.shiftKeys.has(firstKey)) {
					const action = this.chord.shiftSingleTapActions.get(firstKey);
					if (action) this.onShiftSingle?.(action);
				} else {
					const firstBits = this.getBit(firstKey);
					const pendingAction2 = firstBits ? this.specials().get(firstBits) : null;
					if (pendingAction2) this.onSpecialAction?.(pendingAction2);
				}
				this.state = { type: "idle" };
				this.handleFirstKey(key);
			} else {
				const keys = /* @__PURE__ */ new Set([firstKey, key]);
				const singleChar = this.lookup().get(keyBit);
				if (singleChar) {
					this.onOutput?.(singleChar, 0);
					this.state = {
						type: "waitingThird",
						bufferedKeys: keys,
						bits: combined,
						charCount: firstCharCount + singleChar.length,
						pendingAction: null
					};
				} else this.state = {
					type: "waitingThird",
					bufferedKeys: keys,
					bits: combined,
					charCount: firstCharCount,
					pendingAction: null
				};
				this.startTimer();
			}
		}
		handleThirdKey(key, bufferedKeys, existingBits, charCount, pendingAction) {
			this.cancelTimer();
			if (bufferedKeys.has(key)) {
				if (pendingAction) this.onSpecialAction?.(pendingAction);
				this.state = { type: "idle" };
				this.handleFirstKey(key);
				return;
			}
			const keyBit = this.getBit(key);
			if (!keyBit) return;
			const tripleKeys = existingBits + keyBit;
			const tripleResult = this.lookup().get(tripleKeys);
			if (tripleResult) {
				this.onOutput?.(tripleResult, charCount);
				this.state = { type: "idle" };
			} else {
				if (pendingAction) this.onSpecialAction?.(pendingAction);
				this.state = { type: "idle" };
				this.handleFirstKey(key);
			}
		}
		handleShiftHeldKey(key, shiftKey, used) {
			if (key === shiftKey) return;
			const shiftBit = this.getBit(shiftKey);
			const keyBit = this.getBit(key);
			if (!shiftBit || !keyBit) return;
			const combined = shiftBit + keyBit;
			const specialAction = this.specials().get(combined);
			if (specialAction) {
				this.onSpecialAction?.(specialAction);
				this.state = {
					type: "shiftHeld",
					shiftKey,
					used: true
				};
				return;
			}
			const shifted = this.lookup().get(combined);
			if (shifted) {
				this.onOutput?.(shifted, 0);
				this.state = {
					type: "shiftHeld",
					shiftKey,
					used: true
				};
				return;
			}
			if (!used) {
				const action = this.chord.shiftSingleTapActions.get(shiftKey);
				if (action) this.onShiftSingle?.(action);
			}
			this.state = { type: "idle" };
			this.handleFirstKey(key);
		}
		startTimer() {
			this.cancelTimer();
			this.timerId = setTimeout(() => {
				this.timerId = null;
				this.onTimerExpired();
			}, this.windowOverride ?? this.chord.simultaneousWindow);
		}
		cancelTimer() {
			if (this.timerId !== null) {
				clearTimeout(this.timerId);
				this.timerId = null;
			}
		}
		onTimerExpired() {
			switch (this.state.type) {
				case "waiting": {
					const { firstKey } = this.state;
					if (this.chord.shiftKeys.has(firstKey)) if (this.pressedKeys.has(firstKey)) this.state = {
						type: "shiftHeld",
						shiftKey: firstKey,
						used: false
					};
					else {
						const action = this.chord.shiftSingleTapActions.get(firstKey);
						if (action) this.onShiftSingle?.(action);
						this.state = { type: "idle" };
					}
					else {
						const bits = this.getBit(firstKey);
						if (bits) {
							const pendingAction = this.specials().get(bits);
							if (pendingAction) this.onSpecialAction?.(pendingAction);
						}
						this.state = { type: "idle" };
					}
					break;
				}
				case "waitingThird": {
					const { pendingAction } = this.state;
					if (pendingAction) this.onSpecialAction?.(pendingAction);
					const heldShift = this.findHeldShiftKey();
					if (heldShift) this.state = {
						type: "shiftHeld",
						shiftKey: heldShift,
						used: true
					};
					else this.state = { type: "idle" };
					break;
				}
			}
		}
		getBit(key) {
			return this.chord.keyBits.get(key);
		}
		/** Find a shift key that is still physically pressed */
		findHeldShiftKey() {
			for (const key of this.pressedKeys) if (this.chord.shiftKeys.has(key)) return key;
			return null;
		}
	};
	//#endregion
	//#region src/engine/gamepad-kana-table.ts
	/** LT後置シフトマップ: 子音かな→拗音, 母音→小書き */
	const YOUON_POSTSHIFT_MAP = /* @__PURE__ */ new Map([
		["あ", "ぁ"],
		["い", "ぃ"],
		["う", "ぅ"],
		["え", "ぇ"],
		["お", "ぉ"],
		["や", "ゃ"],
		["ゆ", "ゅ"],
		["よ", "ょ"],
		["わ", "ゎ"],
		["か", "きゃ"],
		["く", "きゅ"],
		["こ", "きょ"],
		["さ", "しゃ"],
		["す", "しゅ"],
		["そ", "しょ"],
		["た", "ちゃ"],
		["つ", "ちゅ"],
		["と", "ちょ"],
		["な", "にゃ"],
		["ぬ", "にゅ"],
		["の", "にょ"],
		["は", "ひゃ"],
		["ふ", "ひゅ"],
		["ほ", "ひょ"],
		["ま", "みゃ"],
		["む", "みゅ"],
		["も", "みょ"],
		["ら", "りゃ"],
		["る", "りゅ"],
		["ろ", "りょ"],
		["が", "ぎゃ"],
		["ぐ", "ぎゅ"],
		["ご", "ぎょ"],
		["ざ", "じゃ"],
		["ず", "じゅ"],
		["ぞ", "じょ"],
		["だ", "ぢゃ"],
		["づ", "ぢゅ"],
		["ど", "ぢょ"],
		["ば", "びゃ"],
		["ぶ", "びゅ"],
		["ぼ", "びょ"],
		["ぱ", "ぴゃ"],
		["ぷ", "ぴゅ"],
		["ぽ", "ぴょ"]
	]);
	/** 濁点変換マップ */
	const DAKUTEN_MAP = /* @__PURE__ */ new Map([
		["か", "が"],
		["き", "ぎ"],
		["く", "ぐ"],
		["け", "げ"],
		["こ", "ご"],
		["さ", "ざ"],
		["し", "じ"],
		["す", "ず"],
		["せ", "ぜ"],
		["そ", "ぞ"],
		["た", "だ"],
		["ち", "ぢ"],
		["つ", "づ"],
		["て", "で"],
		["と", "ど"],
		["は", "ば"],
		["ひ", "び"],
		["ふ", "ぶ"],
		["へ", "べ"],
		["ほ", "ぼ"],
		["う", "ゔ"]
	]);
	/** 半濁点変換マップ */
	const HANDAKUTEN_MAP = /* @__PURE__ */ new Map([
		["は", "ぱ"],
		["ひ", "ぴ"],
		["ふ", "ぷ"],
		["へ", "ぺ"],
		["ほ", "ぽ"]
	]);
	/** 濁点逆引き（濁音→清音） */
	const DAKUTEN_REVERSE = new Map([...DAKUTEN_MAP.entries()].map(([k, v]) => [v, k]));
	/** 半濁点逆引き（半濁音→清音） */
	const HANDAKUTEN_REVERSE = new Map([...HANDAKUTEN_MAP.entries()].map(([k, v]) => [v, k]));
	//#endregion
	//#region src/engine/input-engine.ts
	var InputEngine = class {
		constructor(keymap) {
			this.confirmedText = "";
			this.composingKana = "";
			this.inputMode = "japanese";
			this.buffer = new SequentialBuffer();
			this.chordBuffer = null;
			this.onStateChange = null;
			this.onHostAction = null;
			this.keymap = keymap;
			this.buffer.setMappings(keymap.inputMappings, keymap.prefixSet);
			this.setupChordBuffer(keymap);
		}
		/** Switch to a different keymap */
		setKeymap(keymap) {
			this.confirmComposition();
			this.keymap = keymap;
			this.buffer.setMappings(keymap.inputMappings, keymap.prefixSet);
			this.chordBuffer?.reset();
			this.setupChordBuffer(keymap);
		}
		/** Process a key event and return the updated state */
		processKey(event) {
			const isComposing = this.composingKana.length > 0 || !this.buffer.isEmpty;
			const state = isComposing ? "composing" : "idle";
			const isEnglish = this.inputMode === "english";
			const action = routeKey(event, this.keymap, isComposing, state, isEnglish);
			this.executeAction(action);
			return this.getState();
		}
		/** Process a key up event (for chord buffer) */
		processKeyUp(event) {
			if (this.chordBuffer && this.keymap.chordData) {
				const chordKey = this.keymap.chordData.hidToChordKey.get(event.keyCode);
				if (chordKey) this.chordBuffer.keyUp(chordKey);
			}
			return this.getState();
		}
		/** Get current state */
		getState() {
			const isComposing = this.composingKana.length > 0 || !this.buffer.isEmpty;
			return {
				confirmedText: this.confirmedText,
				composingKana: this.composingKana,
				pendingBuffer: this.buffer.pending,
				pendingDisplay: this.buffer.pendingDisplay,
				inputMode: this.inputMode,
				isComposing
			};
		}
		/**
		* 確定済みテキストを取り出して内部バッファをクリアする（差分取り出し用）。
		*
		* `getState().confirmedText` は確定かなを accumulate し続けるため、確定分を
		* 外部バッファ（例: QuuBee → Mozc）へ流し込むホストは、状態変化のたびに本メソッドで
		* 確定分だけを引き取ってエンジン側を空にできる。composing / inputMode には影響しない。
		*
		* 注意: 取り出し後は confirmedText が空になるため、composing が空の状態での
		* `deleteBack` はエンジン内で消す対象を持たない（確定済みテキストの所有権はホスト側へ移る）。
		*/
		takeConfirmedText() {
			const text = this.confirmedText;
			this.confirmedText = "";
			return text;
		}
		/** ゲームパッド等から直接かなを composingKana に追加 */
		appendDirectKana(kana) {
			this.composingKana += kana;
			return this.getState();
		}
		/** confirmedText に直接テキストを挿入（改行等、composing を経由しない） */
		insertConfirmedText(text) {
			this.confirmComposition();
			this.confirmedText += text;
			return this.getState();
		}
		/** composingKana 末尾を差し替え（eager output の巻き戻し用） */
		replaceDirectKana(kana, replaceCount) {
			if (replaceCount > 0) {
				const chars = [...this.composingKana];
				this.composingKana = chars.slice(0, Math.max(0, chars.length - replaceCount)).join("");
			}
			this.composingKana += kana;
			return this.getState();
		}
		/** composingKana 末尾の濁点/半濁点/清音をトグル（か→が→か、は→ば→ぱ→は） */
		applyToggleDakuten() {
			if (this.composingKana.length === 0) return this.getState();
			const chars = [...this.composingKana];
			const last = chars[chars.length - 1];
			const seionFromHandakuten = HANDAKUTEN_REVERSE.get(last);
			if (seionFromHandakuten) {
				chars[chars.length - 1] = seionFromHandakuten;
				this.composingKana = chars.join("");
				return this.getState();
			}
			const seionFromDakuten = DAKUTEN_REVERSE.get(last);
			if (seionFromDakuten) {
				const handakuten = HANDAKUTEN_MAP.get(seionFromDakuten);
				if (handakuten) chars[chars.length - 1] = handakuten;
				else chars[chars.length - 1] = seionFromDakuten;
				this.composingKana = chars.join("");
				return this.getState();
			}
			const dakuten = DAKUTEN_MAP.get(last);
			if (dakuten) {
				chars[chars.length - 1] = dakuten;
				this.composingKana = chars.join("");
			}
			return this.getState();
		}
		/** composingKana 末尾を拗音/小書きに変換。対象外なら「っ」を追加 */
		applyYouon() {
			if (this.composingKana.length === 0) return this.getState();
			const chars = [...this.composingKana];
			const last = chars[chars.length - 1];
			const replaced = YOUON_POSTSHIFT_MAP.get(last);
			if (replaced) {
				chars[chars.length - 1] = replaced[0];
				this.composingKana = chars.join("") + replaced.slice(1);
			} else this.composingKana += "っ";
			return this.getState();
		}
		/** Reset all state */
		reset() {
			this.confirmedText = "";
			this.composingKana = "";
			this.inputMode = "japanese";
			this.buffer.reset();
			this.chordBuffer?.reset();
			this.syncChordBufferMode();
		}
		/** chord バッファの参照テーブルを inputMode に同期する（iOS の syncChordBufferTables 相当） */
		syncChordBufferMode() {
			if (this.chordBuffer) this.chordBuffer.englishMode = this.inputMode === "english";
		}
		/** Whether this engine uses chord input */
		get isChord() {
			return this.chordBuffer !== null;
		}
		/** Override the simultaneous window (ms). null = use keymap default. */
		setSimultaneousWindow(ms) {
			if (this.chordBuffer) this.chordBuffer.windowOverride = ms;
		}
		setupChordBuffer(keymap) {
			if (keymap.chordData) {
				this.chordBuffer = new SimultaneousKeyBuffer(keymap.chordData);
				this.syncChordBufferMode();
				this.chordBuffer.onOutput = (text, replaceCount) => {
					if (this.inputMode === "english") {
						if (replaceCount > 0) {
							const chars = [...this.confirmedText];
							this.confirmedText = chars.slice(0, Math.max(0, chars.length - replaceCount)).join("");
						}
						this.confirmedText += text;
						this.onStateChange?.();
						return;
					}
					if (replaceCount > 0) {
						const chars = [...this.composingKana];
						const remaining = chars.slice(0, Math.max(0, chars.length - replaceCount));
						this.composingKana = remaining.join("");
					}
					if (text.length > 0) this.composingKana += text;
					this.onStateChange?.();
				};
				this.chordBuffer.onShiftSingle = (action) => {
					this.executeAction(action);
					this.onStateChange?.();
				};
				this.chordBuffer.onSpecialAction = (action) => {
					this.executeAction(action);
					this.onStateChange?.();
				};
			} else this.chordBuffer = null;
		}
		executeAction(action) {
			switch (action.type) {
				case "printable":
					this.handlePrintable(action.char);
					break;
				case "confirm":
					if (this.onHostAction?.(action)) break;
					this.confirmComposition();
					break;
				case "cancel":
					this.cancelComposition();
					break;
				case "deleteBack":
					if (this.onHostAction?.(action)) break;
					this.handleDeleteBack();
					break;
				case "toggleInputMode":
					this.confirmComposition();
					this.chordBuffer?.reset();
					this.inputMode = this.inputMode === "japanese" ? "english" : "japanese";
					this.syncChordBufferMode();
					break;
				case "switchToEnglish":
					this.confirmComposition();
					this.chordBuffer?.reset();
					this.inputMode = "english";
					this.syncChordBufferMode();
					break;
				case "switchToJapanese":
					this.chordBuffer?.reset();
					this.inputMode = "japanese";
					this.syncChordBufferMode();
					break;
				case "insertAndConfirm":
					if (this.onHostAction?.(action)) break;
					this.composingKana += action.text;
					this.confirmComposition();
					break;
				case "directInsert":
					this.confirmedText += action.text;
					break;
				case "insertSpace":
					if (this.onHostAction?.(action)) break;
					if (this.inputMode === "japanese") this.confirmedText += action.shifted ? " " : "　";
					else this.confirmedText += " ";
					break;
				case "convert":
					if (this.onHostAction?.(action)) break;
					if (this.composingKana.length > 0 || !this.buffer.isEmpty) this.confirmComposition();
					else this.executeAction({
						type: "insertSpace",
						shifted: false
					});
					break;
				case "chordInput":
					this.chordBuffer?.keyDown(action.key);
					break;
				case "chordShiftDown":
					this.chordBuffer?.keyDown(action.key);
					break;
				case "chordKeyUp":
					this.chordBuffer?.keyUp(action.key);
					break;
				case "moveLeft":
				case "moveRight":
				case "moveUp":
				case "moveDown":
				case "editSegmentLeft":
				case "editSegmentRight":
					if (this.onHostAction?.(action)) break;
					this.confirmComposition();
					break;
				case "pass": break;
			}
		}
		handlePrintable(char) {
			const logical = this.keymap.keyRemap[char] ?? char;
			const charMapResult = this.keymap.characterMap[logical];
			if (charMapResult && !this.wouldBufferHandle(logical)) {
				if (!/^[a-zA-Z]$/.test(logical)) {
					this.composingKana += charMapResult;
					return;
				}
			}
			const resolved = this.buffer.input(logical);
			if (resolved) this.composingKana += resolved;
		}
		/** Check if the sequential buffer's inputMappings would handle this character */
		wouldBufferHandle(char) {
			const testBuf = this.buffer.pending + char;
			return this.keymap.prefixSet.has(testBuf) || this.keymap.inputMappings[testBuf] !== void 0;
		}
		confirmComposition() {
			const remaining = this.buffer.flush();
			if (remaining) this.composingKana += remaining;
			if (this.composingKana.length > 0) {
				this.confirmedText += this.composingKana;
				this.composingKana = "";
			}
			this.chordBuffer?.reset();
		}
		cancelComposition() {
			this.composingKana = "";
			this.buffer.reset();
			this.chordBuffer?.reset();
		}
		/**
		* BS で「素通しされた未解決ローマ字」まで戻ったとき、それを逐次バッファへ復帰させる (v1.6.0)。
		*
		* greedy マッチは語彙外の先頭を素通しで composingKana に積む（例: dka → 「dか」。
		* dk が語彙外なので d が素通しされた）。BS で「d」まで戻してもそれは解決済みかな扱いに
		* なり、続く a が「dあ」になってしまう。実 IME は未解決チャンクの raw を保つので「だ」に
		* なる — その挙動に合わせる。hechima セッション層（内蔵ローマ字）の v0.13.1 と同じ設計で、
		* 戻すのは「続きを待てる」最長の末尾だけ（kt なら t、sh なら sh）。
		*/
		repend() {
			if (!this.buffer.isEmpty) return;
			const run = /[a-zA-Z]+$/.exec(this.composingKana)?.[0];
			if (!run) return;
			for (let i = 0; i < run.length; i++) {
				const tail = run.slice(i);
				if (this.keymap.prefixSet.has(tail)) {
					this.composingKana = this.composingKana.slice(0, this.composingKana.length - tail.length);
					this.buffer.restore(tail);
					return;
				}
			}
		}
		handleDeleteBack() {
			if (this.buffer.deleteBack()) return;
			if (this.composingKana.length > 0) {
				const chars = [...this.composingKana];
				chars.pop();
				this.composingKana = chars.join("");
				this.repend();
				return;
			}
			if (this.confirmedText.length > 0) {
				const chars = [...this.confirmedText];
				chars.pop();
				this.confirmedText = chars.join("");
			}
		}
	};
	//#endregion
	//#region src/engine/index.ts
	/** このバンドルのバージョン（取り込み側が記録する用） */
	const version = ENGINE_VERSION;
	/** サポートする keymap-format のメジャーバージョン */
	const SUPPORTED_MAJOR = 1;
	/**
	* keymap JSON を検証しつつ ExpandedKeymap に変換する。
	* `InputEngine` のコンストラクタにそのまま渡せる形。
	*
	* - `formatVersion` のメジャーが非対応なら明確なエラーを投げる。
	* - `behavior.type` が未対応（sequential / chord 以外）ならデコーダがエラーを投げる。
	*/
	function decodeKeymap(json) {
		if (json === null || typeof json !== "object") throw new Error("KeymapEngine.decodeKeymap: keymap JSON オブジェクトを渡してください");
		const obj = json;
		assertFormatVersion(obj.formatVersion);
		return expandKeymap(decodeKeymap$1(obj));
	}
	function assertFormatVersion(raw) {
		const v = typeof raw === "string" && raw.length > 0 ? raw : "1.0";
		const major = Number.parseInt(v.split(".")[0], 10);
		if (!Number.isFinite(major) || major !== SUPPORTED_MAJOR) throw new Error(`KeymapEngine: 非対応の formatVersion "${v}"（このエンジンは ${SUPPORTED_MAJOR}.x に対応）`);
	}
	/**
	* DOM KeyboardEvent 風オブジェクトからエンジン内部の `KeyEvent` を組み立てる便宜関数。
	* `KeyboardEvent.code` が変換テーブルに無い場合は `null`（呼び元は透過扱いにする）。
	*
	* 生の変換テーブルが必要なら `browserCodeToHID` / `hidNameToCode` を直接使う。
	*/
	function keyEventFromBrowser(e) {
		const keyCode = browserCodeToHID(e.code);
		if (keyCode === void 0) return null;
		let modifiers = 0;
		if (e.shiftKey) modifiers |= KeyModifierFlags.SHIFT;
		if (e.ctrlKey) modifiers |= KeyModifierFlags.CONTROL;
		if (e.altKey) modifiers |= KeyModifierFlags.ALT;
		if (e.metaKey) modifiers |= KeyModifierFlags.META;
		return {
			keyCode,
			characters: typeof e.key === "string" && e.key.length === 1 ? e.key : "",
			modifiers
		};
	}
	//#endregion
	exports.InputEngine = InputEngine;
	exports.KeyModifierFlags = KeyModifierFlags;
	exports.browserCodeToHID = browserCodeToHID;
	exports.createBuiltinRomajiJIS = createBuiltinRomajiJIS;
	exports.createBuiltinRomajiUS = createBuiltinRomajiUS;
	exports.decodeKeymap = decodeKeymap;
	exports.decodeKeymapDefinition = decodeKeymap$1;
	exports.expandKeymap = expandKeymap;
	exports.hidCodeToName = hidCodeToName;
	exports.hidNameToBrowserCode = hidNameToBrowserCode;
	exports.hidNameToCode = hidNameToCode;
	exports.keyEventFromBrowser = keyEventFromBrowser;
	exports.version = version;
});

    return module.exports;
}).call(globalThis);

// ==== vendored: Hechima ====
var Hechima = (function () {
    var module = { exports: {} };
    var exports = module.exports;
    var define = undefined;
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Hechima = {}));
})(this, function(exports) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region src/hechima/version.ts
	const HECHIMA_VERSION = "0.18.0";
	//#endregion
	//#region src/hechima/session.ts
	const ROMAJI = {
		a: "あ",
		i: "い",
		u: "う",
		e: "え",
		o: "お",
		ka: "か",
		ki: "き",
		ku: "く",
		ke: "け",
		ko: "こ",
		ga: "が",
		gi: "ぎ",
		gu: "ぐ",
		ge: "げ",
		go: "ご",
		sa: "さ",
		si: "し",
		su: "す",
		se: "せ",
		so: "そ",
		za: "ざ",
		zi: "じ",
		zu: "ず",
		ze: "ぜ",
		zo: "ぞ",
		ta: "た",
		ti: "ち",
		tu: "つ",
		te: "て",
		to: "と",
		da: "だ",
		di: "ぢ",
		du: "づ",
		de: "で",
		do: "ど",
		na: "な",
		ni: "に",
		nu: "ぬ",
		ne: "ね",
		no: "の",
		n: "ん",
		"n'": "ん",
		ha: "は",
		hi: "ひ",
		hu: "ふ",
		he: "へ",
		ho: "ほ",
		fu: "ふ",
		ba: "ば",
		bi: "び",
		bu: "ぶ",
		be: "べ",
		bo: "ぼ",
		pa: "ぱ",
		pi: "ぴ",
		pu: "ぷ",
		pe: "ぺ",
		po: "ぽ",
		ma: "ま",
		mi: "み",
		mu: "む",
		me: "め",
		mo: "も",
		ya: "や",
		yu: "ゆ",
		yo: "よ",
		ra: "ら",
		ri: "り",
		ru: "る",
		re: "れ",
		ro: "ろ",
		wa: "わ",
		wo: "を",
		wi: "うぃ",
		we: "うぇ",
		kya: "きゃ",
		kyu: "きゅ",
		kyo: "きょ",
		kye: "きぇ",
		gya: "ぎゃ",
		gyu: "ぎゅ",
		gyo: "ぎょ",
		sha: "しゃ",
		shi: "し",
		shu: "しゅ",
		she: "しぇ",
		sho: "しょ",
		sya: "しゃ",
		syu: "しゅ",
		syo: "しょ",
		ja: "じゃ",
		ji: "じ",
		ju: "じゅ",
		je: "じぇ",
		jo: "じょ",
		jya: "じゃ",
		jyu: "じゅ",
		jyo: "じょ",
		zya: "じゃ",
		zyu: "じゅ",
		zyo: "じょ",
		cha: "ちゃ",
		chi: "ち",
		chu: "ちゅ",
		che: "ちぇ",
		cho: "ちょ",
		tya: "ちゃ",
		tyu: "ちゅ",
		tyo: "ちょ",
		dya: "ぢゃ",
		dyu: "ぢゅ",
		dyo: "ぢょ",
		tsu: "つ",
		tsa: "つぁ",
		tsi: "つぃ",
		tse: "つぇ",
		tso: "つぉ",
		tha: "てゃ",
		thi: "てぃ",
		thu: "てゅ",
		the: "てぇ",
		tho: "てょ",
		dha: "でゃ",
		dhi: "でぃ",
		dhu: "でゅ",
		dhe: "でぇ",
		dho: "でょ",
		nya: "にゃ",
		nyu: "にゅ",
		nyo: "にょ",
		hya: "ひゃ",
		hyu: "ひゅ",
		hyo: "ひょ",
		fa: "ふぁ",
		fi: "ふぃ",
		fe: "ふぇ",
		fo: "ふぉ",
		bya: "びゃ",
		byu: "びゅ",
		byo: "びょ",
		pya: "ぴゃ",
		pyu: "ぴゅ",
		pyo: "ぴょ",
		mya: "みゃ",
		myu: "みゅ",
		myo: "みょ",
		rya: "りゃ",
		ryu: "りゅ",
		ryo: "りょ",
		va: "ヴァ",
		vi: "ヴィ",
		vu: "ヴ",
		ve: "ヴェ",
		vo: "ヴォ",
		qa: "くぁ",
		qi: "くぃ",
		qe: "くぇ",
		qo: "くぉ",
		xa: "ぁ",
		xi: "ぃ",
		xu: "ぅ",
		xe: "ぇ",
		xo: "ぉ",
		la: "ぁ",
		li: "ぃ",
		lu: "ぅ",
		le: "ぇ",
		lo: "ぉ",
		xya: "ゃ",
		xyu: "ゅ",
		xyo: "ょ",
		lya: "ゃ",
		lyu: "ゅ",
		lyo: "ょ",
		xtu: "っ",
		xtsu: "っ",
		ltu: "っ",
		ltsu: "っ",
		xwa: "ゎ",
		lwa: "ゎ",
		"-": "ー",
		",": "、",
		".": "。",
		"[": "「",
		"]": "」",
		"?": "？",
		"!": "！",
		"/": "・"
	};
	const DIRECT_COMMIT = {
		".": "。",
		",": "、",
		"?": "？",
		"!": "！",
		"[": "「",
		"]": "」",
		"-": "ー",
		"/": "・"
	};
	const HOST_NAV_KEYS = /* @__PURE__ */ new Set([
		"Backspace",
		"Delete",
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown",
		"Home",
		"End",
		"PageUp",
		"PageDown",
		"Enter",
		"Tab",
		"Escape"
	]);
	const PREFIXES = /* @__PURE__ */ new Set(["nn"]);
	for (const k of Object.keys(ROMAJI)) for (let i = 1; i < k.length; i++) PREFIXES.add(k.slice(0, i));
	const isVowelY = (c) => c !== void 0 && "aiueoy".includes(c);
	const isCons = (c) => c !== void 0 && /[bcdfghjklmpqrstvwxz]/.test(c);
	function resolveRomaji(kana, pend, flush) {
		for (;;) {
			if (!pend) break;
			const exact = Object.prototype.hasOwnProperty.call(ROMAJI, pend);
			const wait = PREFIXES.has(pend);
			if (!flush && wait) break;
			if (exact) {
				kana += ROMAJI[pend];
				pend = "";
				break;
			}
			if (pend[0] === "n") {
				if (pend[1] === "n") {
					if (isVowelY(pend[2])) {
						kana += "ん";
						pend = pend.slice(1);
						continue;
					}
					kana += "ん";
					pend = pend.slice(2);
					continue;
				}
				kana += "ん";
				pend = pend.slice(1);
				continue;
			}
			if (pend.length >= 2 && pend[0] === pend[1] && isCons(pend[0])) {
				kana += "っ";
				pend = pend.slice(1);
				continue;
			}
			kana += pend[0];
			pend = pend.slice(1);
		}
		return {
			kana,
			pend
		};
	}
	function toKatakana(s) {
		let out = "";
		for (const ch of s) {
			const c = ch.codePointAt(0) ?? 0;
			out += c >= 12353 && c <= 12438 ? String.fromCodePoint(c + 96) : ch;
		}
		return out;
	}
	function fallbackConvert(yomi) {
		const kata = toKatakana(yomi);
		return [{
			key: yomi,
			candidates: kata !== yomi ? [kata, yomi] : [yomi]
		}];
	}
	function toZenkakuAscii(s) {
		let out = "";
		for (const ch of s) {
			const c = ch.codePointAt(0) ?? 0;
			out += ch === " " ? "　" : c >= 33 && c <= 126 ? String.fromCodePoint(c + 65248) : ch;
		}
		return out;
	}
	function eijiVariants(raw) {
		const lower = raw.toLowerCase();
		const capital = lower ? lower[0].toUpperCase() + lower.slice(1) : lower;
		return [{
			key: raw,
			candidates: [
				raw,
				lower,
				raw.toUpperCase(),
				capital,
				toZenkakuAscii(raw)
			]
		}];
	}
	function mergeEijiConvert(raw, result) {
		const variants = eijiVariants(raw)[0].candidates ?? [raw];
		let engineCands = [];
		if (result && result.length === 1 && result[0].key === raw) engineCands = (result[0].candidates ?? []).filter((c) => c !== raw);
		return [{
			key: raw,
			candidates: [
				variants[0],
				...engineCands,
				...variants.slice(1)
			]
		}];
	}
	/**
	* 変換セッションを作る。cb は SessionCallbacks（QuuBee 実証済みの 5 点契約）。
	*
	* よみ入力 → 変換 (非同期・世代トークンで in-flight 破棄) → 複数文節の候補選択
	* (←→ 移動・↑↓/Space 候補・Enter 結合確定) → 確定、を 1 つの状態機械で持つ。
	*
	* opts.fold を渡すと候補を二層化する（省略 = 従来どおり全候補を 1 つの流れで巡回）。
	*/
	function createFep(cb, opts) {
		let foldOpts = opts?.fold;
		let active = false;
		let kana = "";
		let pend = "";
		let segs = null;
		let focus = 0;
		let genId = 0;
		let eiji = false;
		let addlShown = 0;
		let addlSel = null;
		const composing = () => (kana + pend).length > 0;
		const resetAddl = () => {
			addlShown = 0;
			addlSel = null;
		};
		const repend = () => {
			if (eiji || pend) return;
			const run = /[a-z]+$/.exec(kana)?.[0];
			if (!run) return;
			for (let i = 0; i < run.length; i++) {
				const tail = run.slice(i);
				if (PREFIXES.has(tail)) {
					kana = kana.slice(0, kana.length - tail.length);
					pend = tail;
					return;
				}
			}
		};
		const clear = () => {
			kana = "";
			pend = "";
			segs = null;
			focus = 0;
			genId++;
			eiji = false;
			resetAddl();
		};
		const backToYomi = () => {
			segs = null;
			focus = 0;
			genId++;
			resetAddl();
		};
		function addlAll() {
			if (!segs) return [];
			const key = segs[focus].key;
			const kata = toKatakana(key);
			const out = [];
			if (kata !== key) out.push({
				text: kata,
				annotation: "カタカナ"
			});
			out.push({
				text: key,
				annotation: "ひらがな"
			});
			return out;
		}
		function addlVisible() {
			const all = addlAll();
			const n = Math.min(addlShown, all.length);
			return n <= 0 ? [] : all.slice(all.length - n);
		}
		/** 文節 i の現在の出力テキスト（注目文節で追加候補を選択中ならそれを優先） */
		function segText(s, i) {
			if (i === focus && addlSel !== null) {
				const v = addlVisible();
				if (addlSel < v.length) return v[addlSel].text;
			}
			return s.candidates[s.idx];
		}
		/** 次候補（↓ / Space / SandS 単打 convert）。追加候補領域内なら下へ、末尾で通常候補の先頭へ戻る */
		function candNext() {
			if (!segs) return;
			if (addlSel !== null) {
				if (addlSel + 1 < addlVisible().length) addlSel++;
				else {
					addlSel = null;
					segs[focus].idx = 0;
				}
				render();
				return;
			}
			const s = segs[focus];
			s.idx = (s.idx + 1) % candRange(s);
			render();
		}
		/** 前候補（↑ / 内蔵経路の Shift+Space）。通常候補の先頭でさらに上 = 追加候補を段階展開 */
		function candPrev() {
			if (!segs) return;
			if (addlSel !== null) {
				if (addlSel > 0) addlSel--;
				else if (addlShown < addlAll().length) addlShown++;
				render();
				return;
			}
			const s = segs[focus];
			if (s.idx === 0 && addlAll().length > 0) {
				if (addlShown === 0) addlShown = 1;
				addlSel = addlVisible().length - 1;
				render();
				return;
			}
			const range = candRange(s);
			s.idx = (s.idx + range - 1) % range;
			render();
		}
		function render() {
			if (segs) cb.show(segs.map((s, i) => ({
				text: segText(s, i),
				kind: i === focus ? "focus" : "other",
				candidates: s.candidates.slice(),
				candidateIndex: s.idx,
				...s.fold < s.candidates.length || s.expanded ? {
					foldCount: s.fold,
					expanded: s.expanded
				} : {},
				...i === focus && addlShown > 0 ? {
					additional: addlVisible(),
					...addlSel !== null ? { additionalIndex: addlSel } : {}
				} : {}
			})));
			else if (composing()) cb.show([{
				text: kana + pend,
				kind: "yomi"
			}]);
			else cb.hide();
		}
		const joined = () => (segs ?? []).map((s, i) => segText(s, i)).join("");
		let lastCommit = null;
		function commit(text) {
			const learned = !!(segs && cb.learn && !eiji);
			if (learned && segs) try {
				cb.learn(segs.map((s, i) => ({
					key: s.key,
					value: segText(s, i)
				})));
			} catch {}
			lastCommit = segs ? {
				text,
				segs,
				focus,
				kana,
				learned
			} : null;
			clear();
			cb.commit(text);
		}
		async function reconvert(surface) {
			if (!active || !cb.reconvert || segs || composing()) return false;
			if (engine && engine.getState().isComposing) return false;
			if (!surface) return false;
			const gen = ++genId;
			let result = null;
			try {
				result = await Promise.resolve(cb.reconvert(surface));
			} catch {
				result = null;
			}
			if (gen !== genId || segs || composing()) return false;
			if (!result || !result.length) return false;
			segs = result.map(ingestSegment);
			kana = segs.map((s) => s.key).join("");
			focus = 0;
			resetAddl();
			render();
			return true;
		}
		function undoCommit() {
			if (!lastCommit || composing() || !cb.retract) return false;
			let removed = false;
			try {
				removed = cb.retract(lastCommit.text);
			} catch {
				removed = false;
			}
			if (!removed) return false;
			segs = lastCommit.segs;
			focus = lastCommit.focus;
			kana = lastCommit.kana;
			genId++;
			resetAddl();
			if (lastCommit.learned) try {
				cb.unlearn?.();
			} catch {}
			lastCommit = null;
			render();
			return true;
		}
		function ingestSegment(s) {
			const src = s.candidates && s.candidates.length ? s.candidates : [s.key];
			const hasCosts = Array.isArray(s.costs) && s.costs.length === src.length;
			const cands = [];
			const costs = [];
			const seen = /* @__PURE__ */ new Set();
			for (let i = 0; i < src.length; i++) {
				if (seen.has(src[i])) continue;
				seen.add(src[i]);
				cands.push(src[i]);
				if (hasCosts) costs.push(s.costs[i]);
			}
			const cs = hasCosts ? costs : null;
			return {
				key: s.key,
				candidates: cands,
				idx: 0,
				fold: foldCount(cands, cs),
				expanded: false,
				expandedFrom: 0,
				costs: cs
			};
		}
		function foldCount(cands, costs) {
			const delta = foldOpts?.costDelta ?? 0;
			if (!delta || !costs || !costs.length) return cands.length;
			const base = costs[0];
			let n = 0;
			while (n < costs.length && costs[n] - base <= delta) n++;
			const lo = Math.max(1, foldOpts?.minCandidates ?? 5);
			const hi = Math.max(lo, foldOpts?.maxCandidates ?? 15);
			return Math.min(cands.length, Math.min(hi, Math.max(lo, n)));
		}
		/** 候補巡回の範囲（一層目のみ / 展開後は全件） */
		function candRange(s) {
			return s.expanded ? s.candidates.length : Math.max(1, s.fold);
		}
		function startConvert() {
			kana = resolveRomaji(kana, pend, true).kana;
			pend = "";
			render();
			const yomi = kana;
			const gen = ++genId;
			(eiji && /^[\x20-\x7e]+$/.test(yomi) ? Promise.resolve(cb.convert ? cb.convert(yomi) : null).then((r) => mergeEijiConvert(yomi, r), () => eijiVariants(yomi)) : Promise.resolve(cb.convert ? cb.convert(yomi) : null)).then((result) => {
				if (gen !== genId || !composing() || kana !== yomi) return;
				if (!result || !result.length) result = fallbackConvert(yomi);
				segs = result.map(ingestSegment);
				focus = 0;
				resetAddl();
				render();
			}).catch(() => {});
		}
		function startResize(offset) {
			if (!segs || !cb.resize) return;
			const idx = focus;
			const gen = ++genId;
			Promise.resolve(cb.resize(idx, offset)).then((result) => {
				if (gen !== genId || !segs) return;
				if (!result || !result.length) return;
				segs = result.map(ingestSegment);
				focus = Math.min(idx, segs.length - 1);
				resetAddl();
				render();
			}).catch(() => {});
		}
		let engine = null;
		let engineKeyOf = null;
		let commitYomiDirect = false;
		function pumpEngine() {
			if (!engine) return;
			if (segs) {
				const st = engine.getState();
				if (!st.isComposing && !st.confirmedText) return;
				commit(joined());
			}
			const confirmed = engine.takeConfirmedText();
			const direct = commitYomiDirect;
			commitYomiDirect = false;
			if (confirmed) {
				if (engine.getState().inputMode === "english") {
					cb.commit(confirmed);
					return;
				}
				if (direct) {
					commit(kana + confirmed);
					return;
				}
				kana += confirmed;
				pend = "";
				startConvert();
				return;
			}
			const st = engine.getState();
			if (st.isComposing) cb.show([{
				text: kana + st.composingKana + st.pendingDisplay,
				kind: "yomi"
			}]);
			else if (!(kana || pend)) cb.hide();
		}
		function navCandidates(tap) {
			const k = tap.key;
			const cur = segs;
			if (!cur) return false;
			if (k === "Enter") {
				commit(joined());
				return true;
			}
			if (k === "Escape" || k === "Backspace") {
				backToYomi();
				render();
				return true;
			}
			if (k === "ArrowLeft" || k === "ArrowRight") {
				if (tap.shiftKey) {
					if (cb.resize) startResize(k === "ArrowRight" ? 1 : -1);
					return true;
				}
				if (cur.length > 1) {
					focus = (focus + (k === "ArrowRight" ? 1 : cur.length - 1)) % cur.length;
					resetAddl();
				}
				render();
				return true;
			}
			if (k === "ArrowUp" || k === "ArrowDown") {
				if (k === "ArrowDown") candNext();
				else candPrev();
				return true;
			}
			return true;
		}
		function handleEngineAction(action) {
			const t = action.type;
			if (t === "insertSpace") {
				if (!(!segs && !composing() && !(engine && engine.getState().isComposing))) {
					if (action.shifted && segs) {
						candPrev();
						return true;
					}
					return handleEngineAction({ type: "convert" });
				}
				cb.commit(action.shifted ? " " : "　");
				return true;
			}
			if (t === "editSegmentLeft" || t === "editSegmentRight") {
				if (segs && cb.resize) startResize(t === "editSegmentRight" ? 1 : -1);
				return true;
			}
			if (t === "convert" || t === "confirm" || t === "insertAndConfirm") {
				const yomiRestored = !segs && composing() && !(engine && engine.getState().isComposing);
				if (!segs && !yomiRestored) {
					if (t === "insertAndConfirm" || t === "confirm" && engine && engine.getState().isComposing) commitYomiDirect = true;
					return false;
				}
				if (t === "convert") {
					if (segs) candNext();
					else startConvert();
					return true;
				}
				commit(segs ? joined() : kana);
				if (action.type === "insertAndConfirm") cb.commit(action.text);
				return true;
			}
			if (t !== "moveLeft" && t !== "moveRight" && t !== "deleteBack") return false;
			if (segs) {
				if (t === "deleteBack") {
					backToYomi();
					render();
					return true;
				}
				if (segs.length > 1) {
					focus = (focus + (t === "moveRight" ? 1 : segs.length - 1)) % segs.length;
					resetAddl();
				}
				render();
				return true;
			}
			if (engine && engine.getState().isComposing) {
				if (t === "deleteBack") return false;
				return true;
			}
			if (composing()) {
				if (t === "deleteBack") {
					kana = Array.from(kana).slice(0, -1).join("");
					genId++;
					render();
					return true;
				}
				return true;
			}
			if (cb.hostKey) cb.hostKey(t === "deleteBack" ? "Backspace" : t === "moveRight" ? "ArrowRight" : "ArrowLeft");
			return true;
		}
		const PHASE2_NAV_KEYS = /* @__PURE__ */ new Set([
			"Enter",
			"Escape",
			"Backspace",
			"ArrowLeft",
			"ArrowRight",
			"ArrowUp",
			"ArrowDown"
		]);
		function engineDown(tap) {
			if (!engine.isChord && tap.shiftKey && !tap.ctrlKey && !tap.altKey && !tap.metaKey && /^[a-zA-Z]$/.test(tap.key) && !engine.getState().isComposing && !composing()) {
				kana = tap.key;
				pend = "";
				eiji = true;
				genId++;
				render();
				return true;
			}
			if (!engine) return false;
			if (segs) {
				if (tap.key === "Shift" || tap.key === "Control" || tap.key === "Alt" || tap.key === "Meta") return true;
				if (tap.ctrlKey || tap.altKey || tap.metaKey) {
					commit(joined());
					return false;
				}
				if (tap.repeat) return true;
				if (PHASE2_NAV_KEYS.has(tap.key)) return navCandidates(tap);
				const kev = engineKeyOf ? engineKeyOf(tap) : null;
				if (!kev) {
					commit(joined());
					return false;
				}
				engine.processKey(kev);
				pumpEngine();
				return true;
			}
			if (tap.key === "Backspace" && tap.ctrlKey && !tap.altKey && !tap.metaKey && !engine.getState().isComposing && !composing()) return undoCommit() ? true : false;
			if (tap.ctrlKey || tap.altKey || tap.metaKey) return false;
			if (tap.repeat) return true;
			const composingNow = engine.getState().isComposing;
			if (!composingNow && composing()) {
				const k = tap.key;
				if (k === "Backspace") {
					kana = Array.from(kana).slice(0, -1).join("");
					genId++;
					render();
					return true;
				}
				if (k === "Enter") {
					commit(kana);
					return true;
				}
				if (k === "Escape") {
					clear();
					cb.hide();
					return true;
				}
				if (k === "ArrowLeft" || k === "ArrowRight" || k === "ArrowUp" || k === "ArrowDown") return true;
			}
			if (!composingNow && tap.code !== void 0 && HOST_NAV_KEYS.has(tap.code)) return false;
			const kev = engineKeyOf ? engineKeyOf(tap) : null;
			if (!kev) return false;
			engine.processKey(kev);
			pumpEngine();
			return true;
		}
		function engineUp(tap) {
			if (!engine) return false;
			if (tap.ctrlKey || tap.altKey || tap.metaKey) return false;
			const kev = engineKeyOf ? engineKeyOf(tap) : null;
			if (kev) {
				engine.processKeyUp(kev);
				pumpEngine();
			}
			return false;
		}
		function feed(e) {
			if (!active) return false;
			if (engine) return engineDown(e);
			if (e.key === "Backspace" && e.ctrlKey && !e.altKey && !e.metaKey && !composing()) return undoCommit() ? true : false;
			if (e.ctrlKey || e.altKey || e.metaKey) return false;
			const k = e.key;
			if (k === "Enter") {
				if (!composing()) return false;
				commit(segs ? joined() : resolveRomaji(kana, pend, true).kana);
				return true;
			}
			if (k === "Escape") {
				if (!composing()) return false;
				if (segs) backToYomi();
				else clear();
				render();
				return true;
			}
			if (k === "Backspace") {
				if (!composing()) return false;
				if (segs) backToYomi();
				else {
					if (pend) pend = pend.slice(0, -1);
					else kana = Array.from(kana).slice(0, -1).join("");
					repend();
				}
				if (!composing()) eiji = false;
				render();
				return true;
			}
			if (k === " ") {
				if (!composing()) return false;
				if (segs) if (e.shiftKey) candPrev();
				else candNext();
				else startConvert();
				return true;
			}
			if (k === "ArrowLeft" || k === "ArrowRight") {
				if (!composing()) return false;
				if (segs && e.shiftKey) {
					if (cb.resize) startResize(k === "ArrowRight" ? 1 : -1);
					return true;
				}
				if (segs && segs.length > 1) {
					focus = (focus + (k === "ArrowRight" ? 1 : segs.length - 1)) % segs.length;
					resetAddl();
					render();
				}
				return true;
			}
			if (k === "ArrowUp" || k === "ArrowDown") {
				if (!composing()) return false;
				if (segs) if (k === "ArrowDown") candNext();
				else candPrev();
				return true;
			}
			if (k.length === 1 && k >= " " && k <= "~") {
				if (/[a-zA-Z]/.test(k) && e.shiftKey) {
					if (segs) commit(joined());
					kana = resolveRomaji(kana, pend, true).kana + k;
					pend = "";
					eiji = true;
					genId++;
					render();
					return true;
				}
				if (eiji && !segs) {
					kana += k;
					genId++;
					render();
					return true;
				}
				const ch = k.toLowerCase();
				if (!composing() && !/[a-z]/.test(ch)) {
					if (DIRECT_COMMIT[ch]) {
						commit(DIRECT_COMMIT[ch]);
						return true;
					}
					return false;
				}
				if (segs) commit(joined());
				pend += ch;
				const r = resolveRomaji(kana, pend, false);
				kana = r.kana;
				pend = r.pend;
				genId++;
				render();
				return true;
			}
			return composing();
		}
		function insertKana(text, replaceCount = 0) {
			if (!active) return false;
			if (typeof text !== "string" || text.length === 0) return false;
			if (!Number.isInteger(replaceCount) || replaceCount < 0) return false;
			if (engine && engine.getState().isComposing) return false;
			if (segs) {
				if (replaceCount > 0) return false;
				commit(joined());
			}
			if (pend) {
				kana = resolveRomaji(kana, pend, true).kana;
				pend = "";
			}
			if (replaceCount > 0) {
				const chars = Array.from(kana);
				if (chars.length < replaceCount) return false;
				kana = chars.slice(0, chars.length - replaceCount).join("");
			}
			kana += text;
			genId++;
			render();
			return true;
		}
		return {
			get active() {
				return active;
			},
			setActive(on) {
				on = !!on;
				if (active && !on && composing()) {
					clear();
					cb.hide();
				}
				active = on;
				return active;
			},
			toggle() {
				return this.setActive(!active);
			},
			feed,
			feedUp(e) {
				return engine ? engineUp(e) : false;
			},
			setEngine(eng, keyOf) {
				if (engine && engine !== eng) {
					try {
						engine.reset();
					} catch {}
					engine.onHostAction = null;
				}
				clear();
				cb.hide();
				engine = eng ?? null;
				engineKeyOf = keyOf ?? null;
				if (engine) engine.onHostAction = (action) => handleEngineAction(action);
			},
			pumpEngine,
			selectCandidate(index) {
				if (!segs) return false;
				const s = segs[focus];
				if (!Number.isInteger(index) || index < 0 || index >= s.candidates.length) return false;
				addlSel = null;
				if (index >= s.fold) s.expanded = true;
				s.idx = index;
				render();
				return true;
			},
			expandCandidates() {
				if (!segs) return false;
				const s = segs[focus];
				if (s.expanded || s.fold >= s.candidates.length) return false;
				s.expandedFrom = s.idx;
				s.expanded = true;
				render();
				return true;
			},
			setFold(o) {
				foldOpts = o ?? void 0;
				if (!segs) return;
				for (const s of segs) {
					s.fold = foldCount(s.candidates, s.costs);
					if (s.idx >= candRange(s)) s.idx = 0;
				}
				render();
			},
			collapseCandidates() {
				if (!segs) return false;
				const s = segs[focus];
				if (!s.expanded) return false;
				s.expanded = false;
				if (s.idx >= s.fold) s.idx = Math.min(s.expandedFrom, Math.max(0, s.fold - 1));
				render();
				return true;
			},
			undoCommit,
			reconvert,
			insertKana,
			reset() {
				clear();
				if (engine) try {
					engine.reset();
				} catch {}
			}
		};
	}
	//#endregion
	//#region src/hechima/worker-client.ts
	function connectWorker(worker, opts) {
		const maxCands = opts?.maxCands ?? 9;
		const pending = /* @__PURE__ */ new Map();
		const pendingLearn = /* @__PURE__ */ new Map();
		const pendingDict = /* @__PURE__ */ new Map();
		let seq = 0;
		let ready = null;
		let initPromise = null;
		let resolveReady = null;
		let rejectReady = null;
		worker.addEventListener("message", (ev) => {
			const m = ev.data;
			if (!m || typeof m !== "object") return;
			if (m.type === "progress") opts?.onProgress?.(m.loaded, m.total);
			else if (m.type === "ready") {
				ready = {
					protocol: m.protocol,
					version: m.version,
					features: m.features
				};
				resolveReady?.(ready);
			} else if (m.type === "error") rejectReady?.(new Error(m.message));
			else if (m.type === "result") {
				const resolve = pending.get(m.id);
				if (resolve) {
					pending.delete(m.id);
					resolve(m.segments);
				}
			} else if (m.type === "learned") {
				const resolve = pendingLearn.get(m.id);
				if (resolve) {
					pendingLearn.delete(m.id);
					resolve(m.ok);
				}
			} else if (m.type === "dict") {
				const resolve = pendingDict.get(m.id);
				if (resolve) {
					pendingDict.delete(m.id);
					resolve(m.entries);
				}
			}
		});
		function init(paths) {
			if (!initPromise) initPromise = new Promise((resolve, reject) => {
				resolveReady = resolve;
				rejectReady = reject;
				worker.postMessage({
					type: "init",
					...paths
				});
			});
			return initPromise;
		}
		/** init 完了を待つ。init 未呼び出しなら既定パスで開始する。失敗は null 扱いにする */
		async function whenReady() {
			try {
				return await init();
			} catch {
				return null;
			}
		}
		async function convert(yomi) {
			if (!await whenReady()) return null;
			return new Promise((resolve) => {
				const id = ++seq;
				pending.set(id, resolve);
				worker.postMessage({
					type: "convert",
					id,
					kana: yomi,
					maxCands
				});
			});
		}
		async function resize(segmentIndex, offset) {
			const info = await whenReady();
			if (!info || !info.features.resize) return null;
			return new Promise((resolve) => {
				const id = ++seq;
				pending.set(id, resolve);
				worker.postMessage({
					type: "resize",
					id,
					segIdx: segmentIndex,
					offset,
					maxCands
				});
			});
		}
		async function learn(segments) {
			const info = await whenReady();
			if (!info || info.features.learn === false || !segments.length) return false;
			return new Promise((resolve) => {
				const id = ++seq;
				pendingLearn.set(id, resolve);
				worker.postMessage({
					type: "learn",
					id,
					kana: segments.map((s) => s.key).join(""),
					sizes: segments.map((s) => Array.from(s.key).length),
					values: segments.map((s) => s.value)
				});
			});
		}
		async function reconvert(surface) {
			if (!await whenReady()) return null;
			return new Promise((resolve) => {
				const id = ++seq;
				pending.set(id, resolve);
				worker.postMessage({
					type: "reconvert",
					id,
					surface,
					maxCands
				});
			});
		}
		async function revert() {
			if (!await whenReady()) return false;
			return new Promise((resolve) => {
				const id = ++seq;
				pendingLearn.set(id, resolve);
				worker.postMessage({
					type: "revert",
					id
				});
			});
		}
		function dictRequest(msg) {
			return whenReady().then((info) => {
				if (!info || info.features.dict === false) return null;
				return new Promise((resolve) => {
					const id = ++seq;
					pendingDict.set(id, resolve);
					worker.postMessage({
						...msg,
						id
					});
				});
			});
		}
		/** ユーザー辞書の一覧（v0.11.0+）。未対応は null */
		function dictList() {
			return dictRequest({ type: "dictList" });
		}
		/** ユーザー辞書へ登録（v0.11.0+。pos 省略 = 名詞）。成功 = 更新後の一覧、失敗 = null */
		function dictAdd(reading, word, pos = 1) {
			return dictRequest({
				type: "dictAdd",
				reading,
				word,
				pos
			});
		}
		/** ユーザー辞書から削除（一覧の index）。成功 = 更新後の一覧、失敗 = null */
		function dictRemove(index) {
			return dictRequest({
				type: "dictRemove",
				index
			});
		}
		async function clearLearning() {
			if (!await whenReady()) return false;
			return new Promise((resolve) => {
				const id = ++seq;
				pendingLearn.set(id, resolve);
				worker.postMessage({
					type: "clearLearning",
					id
				});
			});
		}
		return {
			init,
			convert,
			resize,
			reconvert,
			learn,
			revert,
			clearLearning,
			dictList,
			dictAdd,
			dictRemove,
			callbacks: () => ({
				convert,
				resize,
				reconvert,
				learn: (segments) => {
					learn(segments);
				},
				unlearn: () => {
					revert();
				}
			})
		};
	}
	//#endregion
	//#region src/hechima/protocol.ts
	/** へちま蔓プロトコル版数。ready 応答の `protocol` で通知される */
	const HECHIMA_PROTOCOL_VERSION = 0;
	//#endregion
	//#region src/hechima/index.ts
	/** このバンドルのバージョン（取り込み側が記録する用） */
	const version = HECHIMA_VERSION;
	//#endregion
	exports.HECHIMA_PROTOCOL_VERSION = HECHIMA_PROTOCOL_VERSION;
	exports.connectWorker = connectWorker;
	exports.createFep = createFep;
	exports.fallbackConvert = fallbackConvert;
	exports.resolveRomaji = resolveRomaji;
	exports.version = version;
});

    return module.exports;
}).call(globalThis);

// ==== plugin ====

// ==== bundled keymaps (12) ====
// 自動生成: web/public/keymaps/*.json を埋め込んだもの。編集しないこと。
const BUNDLED_KEYMAPS = {"azik_jis":{"formatVersion":"1.0","name":"AZIK(JIS)","author":"木村清","description":"AZIK 拡張ローマ字入力（JIS キーボード）","keyboardLayout":"jis","targetScript":"hiragana","behavior":{"type":"sequential","characterMap":{"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","{":"『","}":"』","(":"（",")":"）","<":"＜",">":"＞","^":"＾","_":"＿","\"":"”","'":"’","`":"｀","+":"＋","=":"＝","*":"＊","!":"！","?":"？","@":"＠","#":"＃","$":"＄","%":"％","&":"＆","|":"｜","\\":"＼","¥":"￥"}},"modeKeys":{"lang2":"switchToEnglish","lang1":"switchToJapanese","ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"prefixShiftKeys":[],"inputBase":"romaji","suffixRules":{"z":{"vowel":"a","suffix":"ん"},"n":{"vowel":"a","suffix":"ん"},"k":{"vowel":"i","suffix":"ん"},"j":{"vowel":"u","suffix":"ん"},"d":{"vowel":"e","suffix":"ん"},"l":{"vowel":"o","suffix":"ん"},"q":{"vowel":"a","suffix":"い"},"h":{"vowel":"u","suffix":"う"},"w":{"vowel":"e","suffix":"い"},"p":{"vowel":"o","suffix":"う"}},"inputMappings":{"_comment_special":"単打特殊キー","q":"ん",";":"っ","-":"ー",":":"ー","~":"〜",".":"。",",":"、","/":"・","[":"「","]":"」","_comment_z_symbols":"z + 記号","z/":"・","z.":"…","z,":"‥","z-":"〜","z[":"『","z]":"』","_comment_aliases":"AZIK 拗音別名（g = y ショートカット）","kga":"きゃ","kgu":"きゅ","kge":"きぇ","kgo":"きょ","xa":"しゃ","xu":"しゅ","xe":"しぇ","xo":"しょ","ca":"ちゃ","cu":"ちゅ","ce":"ちぇ","co":"ちょ","nga":"にゃ","ngu":"にゅ","nge":"にぇ","ngo":"にょ","hga":"ひゃ","hgu":"ひゅ","hge":"ひぇ","hgo":"ひょ","mga":"みゃ","mgu":"みゅ","mge":"みぇ","mgo":"みょ","pga":"ぴゃ","pgu":"ぴゅ","pge":"ぴぇ","pgo":"ぴょ","_comment_shortcuts_f":"子音 + f ショートカット","kf":"き","jf":"じゅ","hf":"ふ","yf":"ゆ","mf":"む","nf":"ぬ","df":"で","cf":"ちぇ","pf":"ぽん","wf":"わい","sf":"さい","_comment_shortcuts_double":"子音連打ショートカット","ss":"せい","rr":"られ","tt":"たち","_comment_shortcuts_z":"z + 子音ショートカット","zc":"ざ","zv":"ざい","zf":"ぜ","zx":"ぜい","zr":"ざる","_comment_shortcuts_word":"単語ショートカット","kt":"こと","wt":"わた","km":"かも","sr":"する","nb":"ねば","nt":"にち","st":"した","mn":"もの","tm":"ため","tr":"たら","bt":"びと","dt":"だち","ms":"ます","dm":"でも","nr":"なる","mt":"また","gr":"がら","wr":"われ","ht":"ひと","ds":"です","kr":"から","yr":"よる","tb":"たび","gt":"ごと","_comment_azik_foreign":"AZIK 固有の外来音ショートカット","tgi":"てぃ","tgu":"とぅ","dci":"でぃ","dcu":"どぅ","wso":"うぉ","_comment_irregular_suffix":"不規則なサフィックス（suffix 展開と異なる出力）","fp":"ふぉー","vp":"ヴぉー","vh":"ヴー","tgh":"とぅー","dch":"どぅー","wp":"うぉー","wl":"うぉん"}},"azik_us":{"formatVersion":"1.0","name":"AZIK(US)","author":"木村清","description":"AZIK 拡張ローマ字入力（US キーボード）","keyboardLayout":"us","targetScript":"hiragana","behavior":{"type":"sequential","characterMap":{"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","{":"『","}":"』","(":"（",")":"）","<":"＜",">":"＞","^":"＾","_":"＿","\"":"”","'":"’","`":"｀","+":"＋","=":"＝","*":"＊","!":"！","?":"？","@":"＠","#":"＃","$":"＄","%":"％","&":"＆","|":"｜","\\":"＼","¥":"￥"}},"modeKeys":{"ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"prefixShiftKeys":[],"inputBase":"romaji","suffixRules":{"z":{"vowel":"a","suffix":"ん"},"n":{"vowel":"a","suffix":"ん"},"k":{"vowel":"i","suffix":"ん"},"j":{"vowel":"u","suffix":"ん"},"d":{"vowel":"e","suffix":"ん"},"l":{"vowel":"o","suffix":"ん"},"q":{"vowel":"a","suffix":"い"},"h":{"vowel":"u","suffix":"う"},"w":{"vowel":"e","suffix":"い"},"p":{"vowel":"o","suffix":"う"}},"inputMappings":{"_comment_special":"単打特殊キー","q":"ん",";":"っ","-":"ー",":":"ー","~":"〜",".":"。",",":"、","/":"・","[":"「","]":"」","_comment_z_symbols":"z + 記号","z/":"・","z.":"…","z,":"‥","z-":"〜","z[":"『","z]":"』","_comment_aliases":"AZIK 拗音別名（g = y ショートカット）","kga":"きゃ","kgu":"きゅ","kge":"きぇ","kgo":"きょ","xa":"しゃ","xu":"しゅ","xe":"しぇ","xo":"しょ","ca":"ちゃ","cu":"ちゅ","ce":"ちぇ","co":"ちょ","nga":"にゃ","ngu":"にゅ","nge":"にぇ","ngo":"にょ","hga":"ひゃ","hgu":"ひゅ","hge":"ひぇ","hgo":"ひょ","mga":"みゃ","mgu":"みゅ","mge":"みぇ","mgo":"みょ","pga":"ぴゃ","pgu":"ぴゅ","pge":"ぴぇ","pgo":"ぴょ","_comment_shortcuts_f":"子音 + f ショートカット","kf":"き","jf":"じゅ","hf":"ふ","yf":"ゆ","mf":"む","nf":"ぬ","df":"で","cf":"ちぇ","pf":"ぽん","wf":"わい","sf":"さい","_comment_shortcuts_double":"子音連打ショートカット","ss":"せい","rr":"られ","tt":"たち","_comment_shortcuts_z":"z + 子音ショートカット","zc":"ざ","zv":"ざい","zf":"ぜ","zx":"ぜい","zr":"ざる","_comment_shortcuts_word":"単語ショートカット","kt":"こと","wt":"わた","km":"かも","sr":"する","nb":"ねば","nt":"にち","st":"した","mn":"もの","tm":"ため","tr":"たら","bt":"びと","dt":"だち","ms":"ます","dm":"でも","nr":"なる","mt":"また","gr":"がら","wr":"われ","ht":"ひと","ds":"です","kr":"から","yr":"よる","tb":"たび","gt":"ごと","_comment_azik_foreign":"AZIK 固有の外来音ショートカット","tgi":"てぃ","tgu":"とぅ","dci":"でぃ","dcu":"どぅ","wso":"うぉ","_comment_irregular_suffix":"不規則なサフィックス（suffix 展開と異なる出力）","fp":"ふぉー","vp":"ヴぉー","vh":"ヴー","tgh":"とぅー","dch":"どぅー","wp":"うぉー","wl":"うぉん"}},"naginata_jis":{"formatVersion":"1.0","name":"薙刀式(JIS)","author":"大岡俊彦","description":"薙刀式v18同時打鍵入力（JIS キーボード）","keyboardLayout":"jis","targetScript":"hiragana","modeKeys":{"lang2":"switchToEnglish","lang1":"switchToJapanese","ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"behavior":{"type":"chord","config":{"hidToKey":{"q":"Q","w":"W","e":"E","r":"R","t":"T","y":"Y","u":"U","i":"I","o":"O","p":"P","a":"A","s":"S","d":"D","f":"F","g":"G","h":"H","j":"J","k":"K","l":"L","semicolon":"semicolon","z":"Z","x":"X","c":"C","v":"V","b":"B","n":"N","m":"M","comma":"comma","period":"dot","slash":"slash","space":"space"},"shiftKeys":[{"key":"space","singleTapAction":"convert"}],"judgment":"mutual","simultaneousWindow":0.08,"lookupTable":{"W":"き","E":"て","R":"し","I":"る","O":"す","P":"へ","A":"ろ","S":"け","D":"と","F":"か","G":"っ","H":"く","J":"あ","K":"い","L":"う","semicolon":"ー","Z":"ほ","X":"ひ","C":"は","V":"こ","B":"そ","N":"た","M":"な","comma":"ん","dot":"ら","slash":"れ","space+E":"り","space+R":"め","space+W":"ね","space+I":"よ","space+O":"え","space+P":"ゆ","space+U":"さ","space+A":"せ","space+D":"に","space+F":"ま","space+G":"ち","space+H":"や","space+J":"の","space+K":"も","space+L":"つ","space+S":"み","space+semicolon":"ふ","space+B":"ぬ","space+C":"を","space+N":"お","space+X":"ひ","space+Z":"ほ","space+comma":"む","space+dot":"わ","space+slash":"れ","A+J":"ぜ","B+J":"ぞ","C+J":"ば","C+M":"ぱ","D+H":"にゃ","D+I":"にょ","D+J":"ど","D+P":"にゅ","D+J+L":"どぅ","D+L+M":"とぅ","E+H":"りゃ","E+I":"りょ","E+J":"で","E+P":"りゅ","E+J+K":"でぃ","E+J+P":"でゅ","E+K+M":"てぃ","E+M+P":"てゅ","F+H":"ぐ","F+J":"が","F+L":"づ","F+N":"だ","F+O":"ず","F+P":"べ","F+Q":"ヵ","F+U":"ざ","F+semicolon":"ぶ","F+H+J":"ぐぁ","F+H+K":"ぐぃ","F+H+N":"ぐぉ","F+H+O":"ぐぇ","F+H+dot":"ぐゎ","F+J+L":"ゔぁ","F+K+L":"ゔぃ","F+L+N":"ゔぉ","F+L+O":"ゔぇ","F+L+P":"ゔゅ","F+L+semicolon":"ゔ","G+H":"ちゃ","G+I":"ちょ","G+J":"ぢ","G+P":"ちゅ","G+H+J":"ぢゃ","G+I+J":"ぢょ","G+J+O":"ぢぇ","G+J+P":"ぢゅ","G+M+O":"ちぇ","H+Q":"ゃ","H+R":"しゃ","H+S":"みゃ","H+W":"きゃ","H+X":"ひゃ","H+J+R":"じゃ","H+J+V":"くぁ","H+J+W":"ぎゃ","H+J+X":"びゃ","H+K+V":"くぃ","H+M+X":"ぴゃ","H+N+V":"くぉ","H+O+V":"くぇ","H+V+dot":"くゎ","I+Q":"ょ","I+R":"しょ","I+S":"みょ","I+W":"きょ","I+X":"ひょ","I+J+R":"じょ","I+J+W":"ぎょ","I+J+X":"びょ","I+M+X":"ぴょ","J+Q":"ぁ","J+R":"じ","J+S":"げ","J+V":"ご","J+W":"ぎ","J+X":"び","J+Z":"ぼ","J+L+V":"つぁ","J+O+R":"じぇ","J+P+R":"じゅ","J+P+W":"ぎゅ","J+P+X":"びゅ","J+V+semicolon":"ふぁ","K+Q":"ぃ","K+L+V":"うぃ","K+O+V":"いぇ","K+V+semicolon":"ふぃ","L+Q":"ぅ","L+N+V":"うぉ","L+O+V":"うぇ","M+X":"ぴ","M+Z":"ぽ","M+O+R":"しぇ","M+P+X":"ぴゅ","N+Q":"ぉ","N+V+semicolon":"ふぉ","O+Q":"ぇ","O+V+semicolon":"ふぇ","P+Q":"ゅ","P+R":"しゅ","P+S":"みゅ","P+V":"ぺ","P+W":"きゅ","P+X":"ひゅ","P+V+semicolon":"ふゅ","Q+S":"ヶ","Q+dot":"ゎ","V+semicolon":"ぷ"},"specialActions":{"T":"moveLeft","U":"deleteBack","Y":"moveRight","F+G":"switchToEnglish","M+V":"confirm","space+M":"insertAndConfirm:。","space+T":"editSegmentLeft","space+V":"insertAndConfirm:、","space+Y":"editSegmentRight"},"englishLookupTable":{"Q":"q","W":"w","E":"e","R":"r","T":"t","Y":"y","U":"u","I":"i","O":"o","P":"p","A":"a","S":"s","D":"d","F":"f","G":"g","H":"h","J":"j","K":"k","L":"l","semicolon":";","Z":"z","X":"x","C":"c","V":"v","B":"b","N":"n","M":"m","comma":",","dot":".","slash":"/","space+Q":"Q","space+W":"W","space+E":"E","space+R":"R","space+S":"S","space+T":"T","space+Y":"Y","space+U":"U","space+I":"I","space+O":"O","space+P":"P","space+A":"A","space+D":"D","space+F":"F","space+G":"G","space+H":"H","space+J":"J","space+K":"K","space+L":"L","space+Z":"Z","space+X":"X","space+C":"C","space+V":"V","space+B":"B","space+N":"N","space+M":"M","space+comma":"<","space+dot":">","space+semicolon":":","space+slash":"?"},"englishSpecialActions":{"H+J":"switchToJapanese"}}}},"naginata_us":{"formatVersion":"1.0","name":"薙刀式(US)","author":"大岡俊彦","description":"薙刀式v18同時打鍵入力（US キーボード）","keyboardLayout":"us","targetScript":"hiragana","modeKeys":{"ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"behavior":{"type":"chord","config":{"hidToKey":{"q":"Q","w":"W","e":"E","r":"R","t":"T","y":"Y","u":"U","i":"I","o":"O","p":"P","a":"A","s":"S","d":"D","f":"F","g":"G","h":"H","j":"J","k":"K","l":"L","semicolon":"semicolon","z":"Z","x":"X","c":"C","v":"V","b":"B","n":"N","m":"M","comma":"comma","period":"dot","slash":"slash","space":"space"},"shiftKeys":[{"key":"space","singleTapAction":"convert"}],"judgment":"mutual","simultaneousWindow":0.08,"lookupTable":{"W":"き","E":"て","R":"し","I":"る","O":"す","P":"へ","A":"ろ","S":"け","D":"と","F":"か","G":"っ","H":"く","J":"あ","K":"い","L":"う","semicolon":"ー","Z":"ほ","X":"ひ","C":"は","V":"こ","B":"そ","N":"た","M":"な","comma":"ん","dot":"ら","slash":"れ","space+E":"り","space+R":"め","space+W":"ね","space+I":"よ","space+O":"え","space+P":"ゆ","space+U":"さ","space+A":"せ","space+D":"に","space+F":"ま","space+G":"ち","space+H":"や","space+J":"の","space+K":"も","space+L":"つ","space+S":"み","space+semicolon":"ふ","space+B":"ぬ","space+C":"を","space+N":"お","space+X":"ひ","space+Z":"ほ","space+comma":"む","space+dot":"わ","space+slash":"れ","A+J":"ぜ","B+J":"ぞ","C+J":"ば","C+M":"ぱ","D+H":"にゃ","D+I":"にょ","D+J":"ど","D+P":"にゅ","D+J+L":"どぅ","D+L+M":"とぅ","E+H":"りゃ","E+I":"りょ","E+J":"で","E+P":"りゅ","E+J+K":"でぃ","E+J+P":"でゅ","E+K+M":"てぃ","E+M+P":"てゅ","F+H":"ぐ","F+J":"が","F+L":"づ","F+N":"だ","F+O":"ず","F+P":"べ","F+Q":"ヵ","F+U":"ざ","F+semicolon":"ぶ","F+H+J":"ぐぁ","F+H+K":"ぐぃ","F+H+N":"ぐぉ","F+H+O":"ぐぇ","F+H+dot":"ぐゎ","F+J+L":"ゔぁ","F+K+L":"ゔぃ","F+L+N":"ゔぉ","F+L+O":"ゔぇ","F+L+P":"ゔゅ","F+L+semicolon":"ゔ","G+H":"ちゃ","G+I":"ちょ","G+J":"ぢ","G+P":"ちゅ","G+H+J":"ぢゃ","G+I+J":"ぢょ","G+J+O":"ぢぇ","G+J+P":"ぢゅ","G+M+O":"ちぇ","H+Q":"ゃ","H+R":"しゃ","H+S":"みゃ","H+W":"きゃ","H+X":"ひゃ","H+J+R":"じゃ","H+J+V":"くぁ","H+J+W":"ぎゃ","H+J+X":"びゃ","H+K+V":"くぃ","H+M+X":"ぴゃ","H+N+V":"くぉ","H+O+V":"くぇ","H+V+dot":"くゎ","I+Q":"ょ","I+R":"しょ","I+S":"みょ","I+W":"きょ","I+X":"ひょ","I+J+R":"じょ","I+J+W":"ぎょ","I+J+X":"びょ","I+M+X":"ぴょ","J+Q":"ぁ","J+R":"じ","J+S":"げ","J+V":"ご","J+W":"ぎ","J+X":"び","J+Z":"ぼ","J+L+V":"つぁ","J+O+R":"じぇ","J+P+R":"じゅ","J+P+W":"ぎゅ","J+P+X":"びゅ","J+V+semicolon":"ふぁ","K+Q":"ぃ","K+L+V":"うぃ","K+O+V":"いぇ","K+V+semicolon":"ふぃ","L+Q":"ぅ","L+N+V":"うぉ","L+O+V":"うぇ","M+X":"ぴ","M+Z":"ぽ","M+O+R":"しぇ","M+P+X":"ぴゅ","N+Q":"ぉ","N+V+semicolon":"ふぉ","O+Q":"ぇ","O+V+semicolon":"ふぇ","P+Q":"ゅ","P+R":"しゅ","P+S":"みゅ","P+V":"ぺ","P+W":"きゅ","P+X":"ひゅ","P+V+semicolon":"ふゅ","Q+S":"ヶ","Q+dot":"ゎ","V+semicolon":"ぷ"},"specialActions":{"T":"moveLeft","U":"deleteBack","Y":"moveRight","F+G":"switchToEnglish","M+V":"confirm","space+M":"insertAndConfirm:。","space+T":"editSegmentLeft","space+V":"insertAndConfirm:、","space+Y":"editSegmentRight"},"englishLookupTable":{"Q":"q","W":"w","E":"e","R":"r","T":"t","Y":"y","U":"u","I":"i","O":"o","P":"p","A":"a","S":"s","D":"d","F":"f","G":"g","H":"h","J":"j","K":"k","L":"l","semicolon":";","Z":"z","X":"x","C":"c","V":"v","B":"b","N":"n","M":"m","comma":",","dot":".","slash":"/","space+Q":"Q","space+W":"W","space+E":"E","space+R":"R","space+S":"S","space+T":"T","space+Y":"Y","space+U":"U","space+I":"I","space+O":"O","space+P":"P","space+A":"A","space+D":"D","space+F":"F","space+G":"G","space+H":"H","space+J":"J","space+K":"K","space+L":"L","space+Z":"Z","space+X":"X","space+C":"C","space+V":"V","space+B":"B","space+N":"N","space+M":"M","space+comma":"<","space+dot":">","space+semicolon":":","space+slash":"?"},"englishSpecialActions":{"H+J":"switchToJapanese"}}}},"nicola_jis":{"formatVersion":"1.0","name":"NICOLA(JIS)","author":"日本語入力コンソーシアム","description":"NICOLA 親指シフト入力（JIS キーボード）","keyboardLayout":"jis","targetScript":"hiragana","modeKeys":{"ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"behavior":{"type":"chord","config":{"hidToKey":{"q":"Q","w":"W","e":"E","r":"R","t":"T","y":"Y","u":"U","i":"I","o":"O","p":"P","a":"A","s":"S","d":"D","f":"F","g":"G","h":"H","j":"J","k":"K","l":"L","semicolon":"semicolon","z":"Z","x":"X","c":"C","v":"V","b":"B","n":"N","m":"M","comma":"comma","period":"dot","slash":"slash","lang2":"leftThumb","lang1":"rightThumb","international5":"leftThumb","international4":"rightThumb"},"shiftKeys":[{"key":"leftThumb"},{"key":"rightThumb"}],"lookupTable":{"Q":"。","W":"か","E":"た","R":"こ","T":"さ","Y":"ら","U":"ち","I":"く","O":"つ","P":"、","semicolon":"ん","A":"う","S":"し","D":"て","F":"け","G":"せ","H":"は","J":"と","K":"き","L":"い","Z":"．","X":"ひ","C":"す","V":"ふ","B":"へ","N":"め","M":"そ","comma":"ね","dot":"ほ","slash":"・","leftThumb+Q":"ぁ","leftThumb+W":"え","leftThumb+E":"り","leftThumb+R":"ゃ","leftThumb+T":"れ","leftThumb+Y":"ぱ","leftThumb+U":"ぢ","leftThumb+I":"ぐ","leftThumb+O":"づ","leftThumb+P":"ぴ","leftThumb+semicolon":"ー","leftThumb+A":"を","leftThumb+S":"あ","leftThumb+D":"な","leftThumb+F":"ゅ","leftThumb+G":"も","leftThumb+H":"ば","leftThumb+J":"ど","leftThumb+K":"ぎ","leftThumb+L":"ぽ","leftThumb+Z":"ぅ","leftThumb+X":"ー","leftThumb+C":"ろ","leftThumb+V":"や","leftThumb+B":"ぃ","leftThumb+N":"ぷ","leftThumb+M":"ぞ","leftThumb+comma":"ぺ","leftThumb+dot":"ぼ","leftThumb+slash":"ぉ","rightThumb+Q":"ぁ","rightThumb+W":"が","rightThumb+E":"だ","rightThumb+R":"ご","rightThumb+T":"ざ","rightThumb+Y":"よ","rightThumb+U":"に","rightThumb+I":"る","rightThumb+O":"ま","rightThumb+P":"ぇ","rightThumb+semicolon":"っ","rightThumb+A":"ゔ","rightThumb+S":"じ","rightThumb+D":"で","rightThumb+F":"げ","rightThumb+G":"ぜ","rightThumb+H":"み","rightThumb+J":"お","rightThumb+K":"の","rightThumb+L":"ょ","rightThumb+Z":"ぅ","rightThumb+X":"び","rightThumb+C":"ず","rightThumb+V":"ぶ","rightThumb+B":"べ","rightThumb+N":"ぬ","rightThumb+M":"ゆ","rightThumb+comma":"む","rightThumb+dot":"わ","rightThumb+slash":"ぉ"},"specialActions":{},"simultaneousWindow":0.1}}},"nicola_us":{"formatVersion":"1.0","name":"NICOLA(US)","author":"日本語入力コンソーシアム","description":"NICOLA 親指シフト入力（US キーボード）","keyboardLayout":"us","targetScript":"hiragana","modeKeys":{"ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"behavior":{"type":"chord","config":{"hidToKey":{"q":"Q","w":"W","e":"E","r":"R","t":"T","y":"Y","u":"U","i":"I","o":"O","p":"P","a":"A","s":"S","d":"D","f":"F","g":"G","h":"H","j":"J","k":"K","l":"L","semicolon":"semicolon","z":"Z","x":"X","c":"C","v":"V","b":"B","n":"N","m":"M","comma":"comma","period":"dot","slash":"slash","space":"leftThumb","rightAlt":"rightThumb","international5":"leftThumb","international4":"rightThumb","lang2":"leftThumb","lang1":"rightThumb"},"shiftKeys":[{"key":"leftThumb","singleTapAction":"convert"},{"key":"rightThumb"}],"lookupTable":{"Q":"。","W":"か","E":"た","R":"こ","T":"さ","Y":"ら","U":"ち","I":"く","O":"つ","P":"、","semicolon":"ん","A":"う","S":"し","D":"て","F":"け","G":"せ","H":"は","J":"と","K":"き","L":"い","Z":"．","X":"ひ","C":"す","V":"ふ","B":"へ","N":"め","M":"そ","comma":"ね","dot":"ほ","slash":"・","leftThumb+Q":"ぁ","leftThumb+W":"え","leftThumb+E":"り","leftThumb+R":"ゃ","leftThumb+T":"れ","leftThumb+Y":"ぱ","leftThumb+U":"ぢ","leftThumb+I":"ぐ","leftThumb+O":"づ","leftThumb+P":"ぴ","leftThumb+semicolon":"ー","leftThumb+A":"を","leftThumb+S":"あ","leftThumb+D":"な","leftThumb+F":"ゅ","leftThumb+G":"も","leftThumb+H":"ば","leftThumb+J":"ど","leftThumb+K":"ぎ","leftThumb+L":"ぽ","leftThumb+Z":"ぅ","leftThumb+X":"ー","leftThumb+C":"ろ","leftThumb+V":"や","leftThumb+B":"ぃ","leftThumb+N":"ぷ","leftThumb+M":"ぞ","leftThumb+comma":"ぺ","leftThumb+dot":"ぼ","leftThumb+slash":"ぉ","rightThumb+Q":"ぁ","rightThumb+W":"が","rightThumb+E":"だ","rightThumb+R":"ご","rightThumb+T":"ざ","rightThumb+Y":"よ","rightThumb+U":"に","rightThumb+I":"る","rightThumb+O":"ま","rightThumb+P":"ぇ","rightThumb+semicolon":"っ","rightThumb+A":"ゔ","rightThumb+S":"じ","rightThumb+D":"で","rightThumb+F":"げ","rightThumb+G":"ぜ","rightThumb+H":"み","rightThumb+J":"お","rightThumb+K":"の","rightThumb+L":"ょ","rightThumb+Z":"ぅ","rightThumb+X":"び","rightThumb+C":"ず","rightThumb+V":"ぶ","rightThumb+B":"べ","rightThumb+N":"ぬ","rightThumb+M":"ゆ","rightThumb+comma":"む","rightThumb+dot":"わ","rightThumb+slash":"ぉ"},"specialActions":{},"simultaneousWindow":0.1}}},"romaji_colemak_jis":{"formatVersion":"1.0","name":"ローマ字(Colemak JIS)","author":"Shai Coleman","license":"Unlicense","description":"Colemak 配列でのローマ字入力（JIS キーボード）。iPadOS が Colemak をサポートしないため、アプリ側で QWERTY→Colemak キーリマップを行う。","keyboardLayout":"jis","targetScript":"hiragana","behavior":{"type":"sequential","characterMap":{"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９",";":"；","{":"『","}":"』","(":"（",")":"）","<":"＜",">":"＞","^":"＾","_":"＿","\"":"”","'":"’","`":"｀","+":"＋","=":"＝","*":"＊","!":"！","?":"？","@":"＠","#":"＃","$":"＄","%":"％","&":"＆","|":"｜","\\":"＼","¥":"￥","~":"〜"}},"keyRemap":{"_comment_top":"上段: QWERTY→Colemak","e":"f","r":"p","t":"g","y":"j","u":"l","i":"u","o":"y","p":";","_comment_middle":"中段: QWERTY→Colemak","s":"r","d":"s","f":"t","g":"d","j":"n","k":"e","l":"i",";":"o","_comment_bottom":"下段: QWERTY→Colemak","n":"k"},"modeKeys":{"lang2":"switchToEnglish","lang1":"switchToJapanese","ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"prefixShiftKeys":[],"inputBase":"romaji","inputMappings":{"_comment_punctuation":"句読点・記号",",":"、",".":"。","/":"・","-":"ー","[":"「","]":"」"}},"romaji_colemak_us":{"formatVersion":"1.0","name":"ローマ字(Colemak US)","author":"Shai Coleman","license":"Unlicense","description":"Colemak 配列でのローマ字入力（US キーボード）。iPadOS が Colemak をサポートしないため、アプリ側で QWERTY→Colemak キーリマップを行う。","keyboardLayout":"us","targetScript":"hiragana","behavior":{"type":"sequential","characterMap":{"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９",";":"；","{":"『","}":"』","(":"（",")":"）","<":"＜",">":"＞","^":"＾","_":"＿","\"":"”","'":"’","`":"｀","+":"＋","=":"＝","*":"＊","!":"！","?":"？","@":"＠","#":"＃","$":"＄","%":"％","&":"＆","|":"｜","\\":"＼","~":"〜"}},"keyRemap":{"_comment_top":"上段: QWERTY→Colemak","e":"f","r":"p","t":"g","y":"j","u":"l","i":"u","o":"y","p":";","_comment_middle":"中段: QWERTY→Colemak","s":"r","d":"s","f":"t","g":"d","j":"n","k":"e","l":"i",";":"o","_comment_bottom":"下段: QWERTY→Colemak","n":"k"},"modeKeys":{"ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"prefixShiftKeys":[],"inputBase":"romaji","inputMappings":{"_comment_punctuation":"句読点・記号",",":"、",".":"。","/":"・","-":"ー","[":"「","]":"」"}},"romaji_jis":{"formatVersion":"1.0","name":"ローマ字(QWERTY JIS)","description":"標準ローマ字入力（JIS キーボード）","keyboardLayout":"jis","targetScript":"hiragana","behavior":{"type":"sequential"},"inputBase":"romaji","modeKeys":{"lang2":"switchToEnglish","lang1":"switchToJapanese","ctrl+space":"toggleInputMode"}},"romaji_us":{"formatVersion":"1.0","name":"ローマ字(QWERTY US)","description":"標準ローマ字入力（US キーボード）","keyboardLayout":"us","targetScript":"hiragana","behavior":{"type":"sequential"},"inputBase":"romaji","modeKeys":{"ctrl+space":"toggleInputMode"}},"tsuki2-263_jis":{"formatVersion":"1.0","name":"月配列2-263(JIS)","description":"月配列2-263 前置シフト方式（JIS キーボード）","keyboardLayout":"jis","targetScript":"hiragana","behavior":{"type":"sequential","characterMap":{"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","]":"」","{":"『","}":"』","(":"（",")":"）","<":"＜",">":"＞","-":"ー","~":"〜","^":"＾","_":"＿","\"":"”","`":"｀","+":"＋","=":"＝","*":"＊","!":"！","?":"？","'":"＇","#":"＃","$":"＄","%":"％","&":"＆","|":"｜","\\":"＼","¥":"￥"}},"modeKeys":{"lang2":"switchToEnglish","lang1":"switchToJapanese","ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"prefixShiftKeys":["d","k"],"inputMappings":{"_comment_base_top":"単打（上段）","q":"そ","w":"こ","e":"し","r":"て","t":"ょ","y":"つ","u":"ん","i":"い","o":"の","p":"り","_comment_base_middle":"単打（中段）— JIS では US の [ → @、' → : に対応","a":"は","s":"か","@":"ち","f":"と","g":"た","h":"く","j":"う",":":"れ",";":"き","_comment_base_bottom":"単打（下段）","z":"す","x":"け","c":"に","v":"な","b":"さ","n":"っ","m":"る",",":"、",".":"。","l":"゛","/":"゜","_comment_d_prefix":"d 前置シフト","dq":"ぁ","dw":"ひ","de":"ほ","dr":"ふ","dt":"め","dy":"ぬ","du":"え","di":"み","do":"や","dp":"ぇ","da":"ぃ","ds":"を","dd":"ら","df":"あ","dg":"よ","dh":"ま","dj":"お","dk":"も","dl":"わ","d;":"ゆ","dz":"ぅ","dx":"へ","dc":"せ","dv":"ゅ","db":"ゃ","dn":"む","dm":"ろ","d,":"ね","d.":"ー","d/":"ぉ","d@":"「","d:":"」","_comment_k_prefix":"k 前置シフト","kq":"ぁ","kw":"ひ","ke":"ほ","kr":"ふ","kt":"め","ky":"ぬ","ku":"え","ki":"み","ko":"や","kp":"ぇ","ka":"ぃ","ks":"を","kd":"ら","kf":"あ","kg":"よ","kh":"ま","kj":"お","kk":"も","kl":"わ","k;":"ゆ","kz":"ぅ","kx":"へ","kc":"せ","kv":"ゅ","kb":"ゃ","kn":"む","km":"ろ","k,":"ね","k.":"ー","k/":"ぉ","k@":"「","k:":"」","_comment_voiced":"後置濁音（l 後置）","sl":"が",";l":"ぎ","hl":"ぐ","xl":"げ","wl":"ご","bl":"ざ","el":"じ","zl":"ず","ql":"ぞ","gl":"だ","yl":"づ","rl":"で","fl":"ど","al":"ば","@l":"ぢ","jl":"ゔ","_comment_voiced_shifted":"前置シフト + 後置濁音","dwl":"び","drl":"ぶ","dxl":"べ","del":"ぼ","dcl":"ぜ","kwl":"び","krl":"ぶ","kxl":"べ","kel":"ぼ","kcl":"ぜ","_comment_semi_voiced":"半濁音（/ 後置）","a/":"ぱ","dw/":"ぴ","dr/":"ぷ","dx/":"ぺ","de/":"ぽ","kw/":"ぴ","kr/":"ぷ","kx/":"ぺ","ke/":"ぽ"}},"tsuki2-263_us":{"formatVersion":"1.0","name":"月配列2-263(US)","description":"月配列2-263 前置シフト方式（US キーボード）","keyboardLayout":"us","targetScript":"hiragana","behavior":{"type":"sequential","characterMap":{"0":"０","1":"１","2":"２","3":"３","4":"４","5":"５","6":"６","7":"７","8":"８","9":"９","]":"」","{":"『","}":"』","(":"（",")":"）","<":"＜",">":"＞","-":"ー","~":"〜","^":"＾","_":"＿","\"":"”","`":"｀","+":"＋","=":"＝","*":"＊","!":"！","?":"？",":":"：","@":"＠","#":"＃","$":"＄","%":"％","&":"＆","|":"｜","\\":"＼","¥":"￥"}},"modeKeys":{"ctrl+space":"toggleInputMode","ctrl+shift+j":"switchToJapanese","ctrl+shift+semicolon":"switchToEnglish"},"prefixShiftKeys":["d","k"],"inputMappings":{"_comment_base_top":"単打（上段）","q":"そ","w":"こ","e":"し","r":"て","t":"ょ","y":"つ","u":"ん","i":"い","o":"の","p":"り","_comment_base_middle":"単打（中段）","a":"は","s":"か","[":"ち","f":"と","g":"た","h":"く","j":"う","'":"れ",";":"き","_comment_base_bottom":"単打（下段）","z":"す","x":"け","c":"に","v":"な","b":"さ","n":"っ","m":"る",",":"、",".":"。","l":"゛","/":"゜","_comment_d_prefix":"d 前置シフト","dq":"ぁ","dw":"ひ","de":"ほ","dr":"ふ","dt":"め","dy":"ぬ","du":"え","di":"み","do":"や","dp":"ぇ","da":"ぃ","ds":"を","dd":"ら","df":"あ","dg":"よ","dh":"ま","dj":"お","dk":"も","dl":"わ","d;":"ゆ","dz":"ぅ","dx":"へ","dc":"せ","dv":"ゅ","db":"ゃ","dn":"む","dm":"ろ","d,":"ね","d.":"ー","d/":"ぉ","d[":"「","d'":"」","_comment_k_prefix":"k 前置シフト","kq":"ぁ","kw":"ひ","ke":"ほ","kr":"ふ","kt":"め","ky":"ぬ","ku":"え","ki":"み","ko":"や","kp":"ぇ","ka":"ぃ","ks":"を","kd":"ら","kf":"あ","kg":"よ","kh":"ま","kj":"お","kk":"も","kl":"わ","k;":"ゆ","kz":"ぅ","kx":"へ","kc":"せ","kv":"ゅ","kb":"ゃ","kn":"む","km":"ろ","k,":"ね","k.":"ー","k/":"ぉ","k[":"「","k'":"」","_comment_voiced":"後置濁音（l 後置）","sl":"が",";l":"ぎ","hl":"ぐ","xl":"げ","wl":"ご","bl":"ざ","el":"じ","zl":"ず","ql":"ぞ","gl":"だ","yl":"づ","rl":"で","fl":"ど","al":"ば","[l":"ぢ","jl":"ゔ","_comment_voiced_shifted":"前置シフト + 後置濁音","dwl":"び","drl":"ぶ","dxl":"べ","del":"ぼ","dcl":"ぜ","kwl":"び","krl":"ぶ","kxl":"べ","kel":"ぼ","kcl":"ぜ","_comment_semi_voiced":"半濁音（/ 後置）","a/":"ぱ","dw/":"ぴ","dr/":"ぷ","dx/":"ぺ","de/":"ぽ","kw/":"ぴ","kr/":"ぷ","kx/":"ぺ","ke/":"ぽ"}}};


// ==== src/assets.js ====
// バイナリの入手 — wasm 本体と辞書をどこから読むか。
//
// 探す順:
//   1. vault（プラグインフォルダ → `hechima/`）… 手で置いた場合。オフラインでも確実
//   2. IndexedDB … 一度取得したもののキャッシュ
//   3. 配布元からダウンロード → IndexedDB に保存
//
// **辞書 18.9MB を vault に置かない**のが要点。vault に置くと Obsidian Sync / iCloud が
// 端末間で運び続けてしまう（学習データは数十 KB なので vault に置いてよい ——
// あちらは運ばれることが利点になる）。
//
// 取得は Obsidian の `requestUrl` を使う。CORS を回避できるので配布元にヘッダ設定が要らない
// （hechima の「特別なヘッダを配れないホストにも置ける」という前提を崩さない）。

"use strict";

/** 配布元。ラボが公開配信しているものと同一（md5 照合済み） */
const ASSET_BASE = "https://luffa-lang-labo.dev/vendor/hechima-wasm";

/**
 * 取得するもの。辞書は**事前圧縮版**を取る（18.9MB → 12.8MB）。
 * `gz` が付いているものは DecompressionStream で展開してから使う。
 */
const ASSETS = {
    "hechima-wasm.wasm": { url: `${ASSET_BASE}/hechima-wasm.wasm`, gz: false, mb: 2.6 },
    "mozc.data": { url: `${ASSET_BASE}/mozc.data.gz`, gz: true, mb: 12.8 },
};

const DB_NAME = "hechima";
const DB_STORE = "assets";

function openDb() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains(DB_STORE)) db.createObjectStore(DB_STORE);
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

function idbGet(db, key) {
    return new Promise((resolve, reject) => {
        const req = db.transaction(DB_STORE, "readonly").objectStore(DB_STORE).get(key);
        req.onsuccess = () => resolve(req.result ?? null);
        req.onerror = () => reject(req.error);
    });
}

function idbPut(db, key, value) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(DB_STORE, "readwrite");
        tx.objectStore(DB_STORE).put(value, key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}

async function gunzip(buf) {
    const src = new ReadableStream({
        start(c) {
            c.enqueue(new Uint8Array(buf));
            c.close();
        },
    });
    return new Response(src.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
}

/** 辞書として妥当か。未配備パスに HTML を返すホスティング対策も兼ねる */
function looksValid(buf) {
    return buf && buf.byteLength > 1024 * 1024 && new Uint8Array(buf, 0, 1)[0] !== 0x3c;
}

class AssetStore {
    constructor(app, manifest) {
        this.app = app;
        this.manifest = manifest;
        this.db = null;
    }

    async idb() {
        if (!this.db) this.db = await openDb();
        return this.db;
    }

    /** vault に手で置かれていれば、それを最優先で使う（オフライン・上級者向け） */
    async fromVault(name, note) {
        const adapter = this.app.vault.adapter;
        for (const path of [`${this.manifest.dir}/${name}`, `hechima/${name}`]) {
            try {
                const buf = await adapter.readBinary(path);
                if (looksValid(buf)) {
                    note?.(`${mb(buf.byteLength)} — ${path}`);
                    return buf;
                }
            } catch {
                // 無いのが普通
            }
        }
        return null;
    }

    async fromCache(name, note) {
        try {
            const buf = await idbGet(await this.idb(), name);
            if (looksValid(buf)) {
                note?.(`${mb(buf.byteLength)} — IndexedDB のキャッシュ`);
                return buf;
            }
        } catch {
            // IndexedDB が使えない環境（プライベートモード等）は諦めてダウンロードに回る
        }
        return null;
    }

    /**
     * 配布元から取る。`requestUrl` は進捗を刻めないので、開始と完了だけ知らせる。
     * 取得後は IndexedDB に置いて、次回以降は即座に立ち上がるようにする。
     */
    async download(name, note, onProgress) {
        const spec = ASSETS[name];
        if (!spec) throw new Error(`配布元が分からない: ${name}`);
        onProgress?.(`${name} を取得中… (${spec.mb} MB)`);
        const res = await requestUrl({ url: spec.url, method: "GET", throw: true });
        let buf = res.arrayBuffer;
        if (spec.gz) {
            const head = new Uint8Array(buf, 0, 2);
            if (head[0] !== 0x1f || head[1] !== 0x8b) throw new Error(`${spec.url} は gzip ではない`);
            onProgress?.(`${name} を展開中…`);
            buf = await gunzip(buf);
        }
        if (!looksValid(buf)) throw new Error(`${name} が不正（${buf?.byteLength ?? 0} bytes）`);
        note?.(`${mb(buf.byteLength)} — ダウンロード（${spec.url}）`);
        try {
            await idbPut(await this.idb(), name, buf);
        } catch {
            // 保存できなくても今回は動く。次回また取り直すだけ
        }
        return buf;
    }

    /** 3 経路をこの順で試す */
    async get(name, note, onProgress) {
        return (
            (await this.fromVault(name, note)) ??
            (await this.fromCache(name, note)) ??
            (await this.download(name, note, onProgress))
        );
    }

    /** キャッシュを捨てる（取り直したいとき） */
    async clearCache() {
        const db = await this.idb();
        for (const name of Object.keys(ASSETS)) await idbPut(db, name, null);
    }

    /** どこから読めるかを調べる（設定画面の表示用。ダウンロードはしない） */
    async status() {
        const out = {};
        for (const name of Object.keys(ASSETS)) {
            out[name] = (await this.fromVault(name)) ? "vault" : (await this.fromCache(name)) ? "キャッシュ" : "未取得";
        }
        return out;
    }
}


// ==== src/engine.js ====
// hechima のエンジン層 — wasm の起動と、変換セッション層への cb 実装。
//
// 偵察（エンジン偵察コマンド）と本番のセッションが**同じ起動経路**を使う。偵察で緑だった道が
// そのまま本番の道である、という関係を保つためで、片方だけ直して食い違うのを防ぐ。
//
// Worker を使わない。単スレッド版なのでメインスレッドで完結する（実測 init 36〜140ms）。
// その代償として hechima-worker が持っている学習の永続化がここに無いので、自前で持つ
// （`docs/obsidian-plugin-plan.md` §1.2 — vault に置くと端末間で同期する）。

"use strict";

/** 変換結果 JSON のパース。空・失敗・segments 無しは null（呼び元は現状維持） */
function parseSegments(json) {
    try {
        const parsed = JSON.parse(String(json));
        if (parsed && Array.isArray(parsed.segments) && parsed.segments.length) return parsed.segments;
    } catch {
        /* 空文字列や不正 JSON はここに来る */
    }
    return null;
}

/**
 * cctz の固定オフセットゾーン名。wasm には zoneinfo が無く、TZ 未設定だと UTC に落ちて
 * 「いま」「きょう」の日時候補が 9 時間ずれる。hechima-worker と同じ手当て。
 */
function fixedOffsetTzName() {
    const offMin = -new Date().getTimezoneOffset();
    const sign = offMin >= 0 ? "+" : "-";
    const abs = Math.abs(offMin);
    const hh = String(Math.floor(abs / 60)).padStart(2, "0");
    const mm = String(abs % 60).padStart(2, "0");
    return `Fixed/UTC${sign}${hh}:${mm}:00`;
}

/**
 * 学習・ユーザー辞書・設定が存在しない素のプロファイルで毎回出る mozc の警告。
 * 永続化する前は必ず出るので、異常ではない。
 */
const BENIGN_STDERR = [
    /absl::InitializeLog/,
    /modification time of the user dictionary/,
    /MaybeStartReload\(\) didn't start reloading/,
    /cannot open user history file/,
    /Can't load user history data/,
    /config1\.db is not found/,
];

/** バイト数を MB 表記にする（engine と probe の両方が使う） */
const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`;

/** 学習の永続化対象。辞書（18.9MB）と違い数十 KB なので vault に置いてよい */
const PERSIST_FILES = ["segment.db", "boundary.db", "user_dictionary.db"];

/** 候補の取得数。候補窓の複数ページ分（既定の 9 だとページングが起きない） */
const MAX_CANDS = 50;

class HechimaEngine {
    constructor(app, manifest) {
        this.app = app;
        this.manifest = manifest;
        this.assets = new AssetStore(app, manifest);
        this.onProgress = null; // 初回ダウンロードの状況を伝えるフック
        this.mod = null;
        this.booting = null;
        this.suppressed = 0;
        this.stderr = [];
        // 文節伸縮の 1:1 状態。wasm 側は v0.3.0+ でステートレスなので、
        // 「直近の変換」という接続固有の状態はこちらが持つ（worker と同じ役割分担）
        this.lastYomi = null;
        this.lastKeys = null;
        this.saveTimer = null;
    }

    // ---- 起動 ------------------------------------------------------------

    /**
     * バイナリを入手する。vault → IndexedDB → ダウンロード の順（`src/assets.js`）。
     * `onProgress` はダウンロード中の状況を知らせる（初回だけ数十秒かかるため）。
     */
    async readAsset(name, onNote) {
        return this.assets.get(name, onNote, this.onProgress);
    }

    /**
     * wasm を起動する。多重呼び出しは同じ Promise を返す（起動は 1 回だけ）。
     * `step` を渡すと段ごとに計測される（偵察はこれを使う。本番は省略）。
     */
    boot(step) {
        if (this.mod) return Promise.resolve(this.mod);
        if (this.booting) return this.booting;
        const run = step ?? ((_name, fn) => fn());
        this.booting = (async () => {
            this.suppressed = 0;
            this.stderr = [];

            const wasmBinary = await run("hechima-wasm.wasm を入手", (note) =>
                this.readAsset("hechima-wasm.wasm", note)
            );
            const dict = await run("mozc.data を入手", async (note) =>
                new Uint8Array(await this.readAsset("mozc.data", note))
            );

            const mod = await run("wasm をインスタンス化（wasmBinary 直渡し）", async () => {
                if (typeof HechimaModule !== "function") {
                    throw new Error("HechimaModule が無い — main.js の結合に失敗している");
                }
                const tz = fixedOffsetTzName();
                const cfg = {
                    wasmBinary,
                    // locateFile は wasmBinary の有無に関わらず一度呼ばれるが、直後の
                    // getBinarySync が wasmBinary を返すのでフェッチは起きない。
                    // URL にならない番兵を返しておけば、万一読みに行ったとき一目で分かる
                    locateFile: () => "hechima://never-fetched/hechima-wasm.wasm",
                    print: () => {},
                    printErr: (m) => {
                        if (BENIGN_STDERR.some((re) => re.test(m))) {
                            this.suppressed += 1;
                            return;
                        }
                        this.stderr.push(m);
                    },
                };
                cfg.preRun = [() => { cfg.ENV.TZ = tz; }];
                return HechimaModule(cfg);
            });

            await run("学習を復元", () => this.restoreLearning(mod));
            await run("辞書を MEMFS に書く", () => { mod.FS.writeFile("/mozc.data", dict); });
            await run("hechima_init", () => {
                const rc = mod.ccall("hechima_init", "number", ["string"], ["/mozc.data"]);
                if (rc !== 0) throw new Error(`hechima_init failed (rc=${rc})`);
            });

            this.mod = mod;
            this.onProgress?.(null); // 進捗表示を閉じる合図
            return mod;
        })();
        this.booting.catch(() => { this.booting = null; }); // 失敗したら次回やり直せる
        return this.booting;
    }

    dispose() {
        this.mod = null;
        this.booting = null;
        if (this.saveTimer !== null) clearTimeout(this.saveTimer);
        this.saveTimer = null;
    }

    has(fn) {
        return this.mod && typeof this.mod[`_hechima_${fn}`] === "function";
    }

    // ---- 学習の永続化（vault 上。Obsidian Sync が端末間へ運ぶ） ----------

    learningDir() {
        return `${this.manifest.dir}/learning`;
    }

    async restoreLearning(mod) {
        const adapter = this.app.vault.adapter;
        for (const name of PERSIST_FILES) {
            try {
                const buf = new Uint8Array(await adapter.readBinary(`${this.learningDir()}/${name}`));
                if (buf.length) mod.FS.writeFile(`/tmp/${name}`, buf);
            } catch {
                // 初回は無い。読めなくても学習自体は動く（セッション中のみになる）
            }
        }
    }

    async saveLearning() {
        if (!this.mod || !this.has("sync")) return;
        try {
            this.mod.ccall("hechima_sync", "number", [], []);
        } catch {
            return;
        }
        const adapter = this.app.vault.adapter;
        try {
            if (!(await adapter.exists(this.learningDir()))) await adapter.mkdir(this.learningDir());
        } catch {
            return;
        }
        for (const name of PERSIST_FILES) {
            let data;
            try {
                data = this.mod.FS.readFile(`/tmp/${name}`);
            } catch {
                continue; // まだ生成されていないファイル
            }
            try {
                await adapter.writeBinary(
                    `${this.learningDir()}/${name}`,
                    data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
                );
            } catch {
                // 書けなくても次の learn で再試行される
            }
        }
    }

    /**
     * 学習をリセットする。対象は学習ファイル（segment.db / boundary.db）だけで、
     * **ユーザー辞書（user_dictionary.db）は消さない** — worker の clearLearning と同じ区別。
     * wasm 内のメモリ状態は dispose で捨てる（呼び元が再起動する）。
     */
    async clearLearning() {
        if (this.saveTimer !== null) {
            clearTimeout(this.saveTimer);
            this.saveTimer = null;
        }
        const adapter = this.app.vault.adapter;
        for (const name of ["segment.db", "boundary.db"]) {
            try {
                await adapter.remove(`${this.learningDir()}/${name}`);
            } catch {
                // 無いのは成功扱い
            }
        }
        this.dispose();
    }

    /** 確定のたびに書くと重いので debounce する（worker と同じ 3 秒） */
    scheduleSave() {
        if (this.saveTimer !== null) clearTimeout(this.saveTimer);
        this.saveTimer = setTimeout(() => {
            this.saveTimer = null;
            void this.saveLearning();
        }, 3000);
    }

    // ---- 変換 ------------------------------------------------------------

    remember(segments) {
        if (segments && segments.length) {
            this.lastKeys = segments.map((s) => s.key);
            this.lastYomi = this.lastKeys.join("");
        }
        return segments;
    }

    convert(yomi) {
        if (!this.mod || !yomi) return null;
        const json = this.mod.ccall("hechima_convert", "string", ["string", "number"], [yomi, MAX_CANDS]);
        return this.remember(parseSegments(json));
    }

    /**
     * 文節伸縮。`hechima_convert2`（ステートレス）に、先頭からの各文節よみ長を渡して再変換する。
     * 直近の変換という 1:1 の状態はこちら持ち。伸縮不能・範囲外は null = 呼び元は現状維持。
     */
    resize(segmentIndex, offset) {
        if (!this.mod || !this.has("convert2") || !this.lastYomi || !this.lastKeys) return null;
        if (segmentIndex < 0 || segmentIndex >= this.lastKeys.length) return null;
        const lens = this.lastKeys.map((k) => Array.from(k).length);
        const target = lens[segmentIndex] + offset;
        if (target < 1 || target > 255) return null;
        const sizes = [...lens.slice(0, segmentIndex), target];
        const json = this.mod.ccall(
            "hechima_convert2",
            "string",
            ["string", "string", "number"],
            [this.lastYomi, sizes.join(","), MAX_CANDS]
        );
        return this.remember(parseSegments(json));
    }

    reconvert(surface) {
        if (!this.mod || !this.has("reconvert") || !surface) return null;
        const json = this.mod.ccall("hechima_reconvert", "string", ["string", "number"], [surface, MAX_CANDS]);
        return this.remember(parseSegments(json));
    }

    /**
     * 確定内容の学習。変換を再現して各文節を表示値の一致で確定する（all-or-nothing）。
     * fire-and-forget なので失敗しても入力は続く。
     */
    learn(segments) {
        if (!this.mod || !this.has("learn") || !Array.isArray(segments) || !segments.length) return;
        const kana = segments.map((s) => s.key).join("");
        const sizes = segments.map((s) => Array.from(s.key).length);
        const values = segments.map((s) => s.value);
        if (!kana || !values.length) return;
        try {
            const rc = this.mod.ccall(
                "hechima_learn",
                "number",
                ["string", "string", "string"],
                [kana, sizes.join(","), values.join("\t")]
            );
            if (rc === 0) this.scheduleSave();
        } catch {
            /* 学習の失敗で入力を止めない */
        }
    }

    /** 確定アンドゥの学習巻き戻し。不成立 learn の後は no-op */
    unlearn() {
        if (!this.mod || !this.has("revert")) return;
        try {
            this.mod.ccall("hechima_revert", "number", [], []);
            this.scheduleSave();
        } catch {
            /* 同上 */
        }
    }

    /** `Hechima.createFep` に渡す cb のうち、エンジンが担う分 */
    callbacks() {
        return {
            convert: (yomi) => this.convert(yomi),
            resize: (i, off) => this.resize(i, off),
            reconvert: (surface) => this.reconvert(surface),
            learn: (segments) => this.learn(segments),
            unlearn: () => this.unlearn(),
        };
    }
}


// ==== src/view.js ====
// 表示層 — 未確定文字列と変換候補を CodeMirror 6 の上に描く。
//
// **未確定を文書に入れない。** Obsidian は自動保存するので、実テキストとして挿入すると
// 打ちかけのかなが .md に書き込まれ、Undo 履歴も汚れる。キャレット位置に幅ゼロの
// `Decoration.widget` を置き、その中に描く（`docs/obsidian-plugin-plan.md` §1.1）。
//
// 候補は `showTooltip` に任せる。文書位置へのアンカーと画面端での反転が向こう持ちになるので、
// /tategaki/ で苦労した近接アンカーを作り直さずに済む。
//
// 配色は Obsidian の CSS 変数だけで組む。テーマを切り替えると候補窓も一緒に着替える。

"use strict";

/** 候補窓に一度に並べる件数（標準 IME と同じく 1-9 で直接選べる範囲） */
const CAND_WINDOW = 9;

const IME_STYLES = `
/* 下線は**文節の span だけ**が描く。ラッパーにも引くと 2 本重なって見える */
.hechima-composing { white-space: pre; }
.hechima-seg-yomi { border-bottom: 2px dashed var(--text-muted); }
.hechima-seg-focus {
  background: var(--text-selection);
  border-bottom: 2px solid var(--interactive-accent);
}
.hechima-seg-other { border-bottom: 1px solid var(--text-faint); }
.hechima-cands {
  background: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: var(--radius-s, 4px);
  box-shadow: var(--shadow-s, 0 2px 8px rgba(0,0,0,.15));
  font-size: var(--font-text-size, 16px);
  /* 本文フォントが大きいと 9 行 + 追加候補 + フッタで 40vh を超え、
     候補窓にスクロールバーが出る（標準 IME には無い見た目）。余裕を持たせる */
  max-height: 70vh;
  overflow-y: auto;
  padding: 2px 0;
}
.hechima-cand {
  cursor: pointer;
  display: flex;
  /* サイズの違う番号と本文を並べるので縦位置をそろえる。
     既定の stretch だと小さい方（番号・注釈）が行の上端に張り付く */
  align-items: center;
  gap: .6em;
  padding: 1px 8px;
  color: var(--text-normal);
  white-space: nowrap;
}
/* **ホストのフォントは候補の本文だけ**に効かせる。番号・注釈・フッタまで巻き込むと、
   見出しの中で変換したときに桁や件数まで巨大化して枠から溢れる（実機で発生）。
   これらは Obsidian の UI フォント + rem 固定にして、本文の字送りから独立させる。 */
.hechima-cand-body {
  font-family: var(--hechima-font-family, inherit);
  font-size: var(--hechima-font-size, inherit);
  font-weight: var(--hechima-font-weight, inherit);
  font-style: var(--hechima-font-style, inherit);
}
.hechima-cand-num, .hechima-cand-ann, .hechima-cand-foot {
  font-family: var(--font-interface, sans-serif);
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
}
.hechima-cand-num { color: var(--text-faint); min-width: 1em; text-align: right; font-size: .75rem; }
.hechima-cand-sel { background: var(--interactive-accent); color: var(--text-on-accent); }
.hechima-cand-sel .hechima-cand-num { color: var(--text-on-accent); opacity: .7; }
.hechima-cand-annot { color: var(--text-muted); margin-left: auto; padding-left: 1em; }
.hechima-cand-ann { color: var(--text-muted); min-width: 4.5em; font-size: .75rem; }
.hechima-cand-divider {
  border-top: 1px solid var(--background-modifier-border);
  margin: 2px 0;
}
.hechima-cand-foot {
  border-top: 1px solid var(--background-modifier-border);
  color: var(--text-faint);
  font-size: .75rem;
  padding: 3px 8px;
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: center;
  min-height: 1em;
}
.hechima-cand-dots { display: inline-flex; gap: 4px; align-items: center; }
.hechima-cand-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid var(--text-muted);
  opacity: .55;
}
.hechima-cand-dot.on { background: var(--text-muted); opacity: 1; }
.hechima-mode-badge {
  background: var(--background-primary);
  border: 1px solid var(--background-modifier-border);
  border-radius: var(--radius-s, 4px);
  box-shadow: var(--shadow-s, 0 2px 8px rgba(0,0,0,.15));
  color: var(--text-normal);
  font-family: var(--font-interface, sans-serif);
  font-size: .8rem;
  padding: 2px 8px;
  white-space: nowrap;
  animation: hechima-mode-fade 1.2s ease-in forwards;
}
@keyframes hechima-mode-fade {
  0%, 60% { opacity: 1; }
  100% { opacity: 0; }
}
`;

/**
 * スタイルを注入する（styles.css を別ファイルで配らずに済む）。
 *
 * **既にあっても中身を差し替える。** 「あれば何もしない」にすると、プラグインだけを
 * リロードしたとき古い CSS が残り続ける（アプリ全体を再起動するまで直らない）。
 * 実機で iPad と ChromeOS の見た目が食い違った原因がこれだった —— ChromeOS は Ctrl+R で
 * 全体を、iPad は BRAT でプラグインだけをリロードしていた。
 * 戻り値は撤去する関数（プラグインの unload に登録する）。
 */
function injectStyles() {
    const id = "hechima-ime-styles";
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement("style");
        el.id = id;
        document.head.appendChild(el);
    }
    el.textContent = IME_STYLES;
    return () => el.remove();
}

/**
 * CM6 の拡張を組み立てる。`cmView` / `cmState` が取れない環境では null を返し、
 * 呼び元は Notice にフォールバックする。
 */
function createImeView() {
    if (!cmView || !cmState) return null;
    const { EditorView, Decoration, WidgetType, showTooltip } = cmView;
    const { StateField, StateEffect } = cmState;

    /** 未確定文字列を描くウィジェット。実テキストではないので文書は無変更 */
    class ComposingWidget extends WidgetType {
        constructor(segments) {
            super();
            this.segments = segments;
        }

        eq(other) {
            return (
                this.segments.length === other.segments.length &&
                this.segments.every((s, i) => s.text === other.segments[i].text && s.kind === other.segments[i].kind)
            );
        }

        toDOM() {
            const wrap = document.createElement("span");
            wrap.className = "hechima-composing";
            for (const seg of this.segments) {
                const el = document.createElement("span");
                el.className = `hechima-seg-${seg.kind}`;
                el.textContent = seg.text;
                wrap.appendChild(el);
            }
            return wrap;
        }

        ignoreEvent() {
            return true; // ウィジェット上のイベントはエディタに渡さない
        }
    }

    /**
     * キャレット位置の文字属性を候補窓に写す。見出しの中や太字の途中で変換したとき、
     * 候補が本文と同じ見た目で並ぶ（Chrome 拡張でやった「変換の WYSIWYG 化」と同じ狙い）。
     */
    function applyHostFont(dom, view, pos) {
        try {
            const at = view.domAtPos(pos);
            const el = at?.node?.nodeType === 3 ? at.node.parentElement : at?.node;
            if (!el || !el.nodeType) return;
            const cs = getComputedStyle(el);
            // 変数で渡し、CSS 側で**候補の本文だけ**に適用する。
            // lineHeight は写さない —— 見出し等の大きな行送りが窓全体の縦幅を暴らせる
            for (const [prop, name] of [
                ["fontFamily", "family"], ["fontSize", "size"],
                ["fontWeight", "weight"], ["fontStyle", "style"],
            ]) {
                if (cs[prop]) dom.style.setProperty(`--hechima-font-${name}`, cs[prop]);
            }
        } catch {
            // 位置が取れない場面（描画直後等）は既定の見た目でよい
        }
    }

    /**
     * 注目文節の左端が、未確定表示の左端から何 px 右にあるかを測る。
     *
     * 候補窓は文書位置（= 未確定表示の先頭）にアンカーされるので、これを `offset` に足すと
     * **注目文節の左端に候補窓の左端がそろう**（標準 IME の挙動）。文節を ←→ で移動すると
     * 候補窓も一緒に動く。
     *
     * 文節の移動では各文節の**文字列は変わらず kind だけが変わる**ので、更新が DOM に反映される
     * 前に現在の DOM を測っても位置は正しい。念のため子要素数が一致するときだけ使う。
     */
    function focusOffsetX(view, segments) {
        const focusIdx = segments.findIndex((s) => s.kind === "focus");
        if (focusIdx <= 0) return 0;
        try {
            const wrap = view.dom.querySelector(".hechima-composing");
            const spans = wrap?.children;
            if (!spans || spans.length !== segments.length) return 0;
            const left = wrap.getBoundingClientRect().left;
            return Math.round(spans[focusIdx].getBoundingClientRect().left - left);
        } catch {
            return 0;
        }
    }

    /**
     * ページ位置の点列（ラボの candlayer 一層目と同じ語彙）。
     * 全体のページ数と現在地を、**数えずに掴める**ようにするためのもの。
     * 数字（idx/total + ページ）はやり過ぎだった —— 候補数が分かればページ数は要らないし、
     * ページ数があれば総数は重要でない（実機の指摘）。点が多すぎて数えられない領域
     * （8 ページ超）では素直に数字へ倒す。二層化（Phase 8）でも同じ語彙を使う。
     */
    function pageDots(pages, page) {
        if (pages > 8) {
            const n = document.createElement("span");
            n.textContent = `${page + 1}/${pages}`;
            return n;
        }
        const dots = document.createElement("span");
        dots.className = "hechima-cand-dots";
        for (let i = 0; i < pages; i++) {
            const d = document.createElement("span");
            d.className = "hechima-cand-dot" + (i === page ? " on" : "");
            dots.appendChild(d);
        }
        return dots;
    }

    /**
     * 候補窓。**ページ送り**で見せる（標準 IME と同じ）。
     * 中央スクロールにすると選択位置が窓の途中で固定され、番号と候補の対応が崩れる。
     */
    function candidateTooltip(state) {
        const focus = state.segments.find((s) => s.kind === "focus");
        const cands = focus?.candidates;
        const idxRaw = focus?.candidateIndex ?? 0;
        const inAdditional = focus?.additionalIndex !== undefined;
        const page = Math.floor(idxRaw / CAND_WINDOW);
        // 追加候補（↑ で段階展開されるひらがな/カタカナ等）は **1 ページ目でだけ**見せる。
        // 2 ページ目以降からは ↑ でそのページ内を遡るだけで到達できないので、
        // 出しておくと「選べそうなのに選べない」誤解になる（実機の指摘）。
        const additional = inAdditional || page === 0 ? focus?.additional ?? [] : [];
        if (!cands || (cands.length < 2 && !additional.length)) return null;
        const idx = idxRaw;
        const start = page * CAND_WINDOW;
        const shown = cands.slice(start, start + CAND_WINDOW);
        const pages = Math.ceil(cands.length / CAND_WINDOW);

        return {
            pos: state.pos,
            above: false,
            strictSide: false,
            arrow: false,
            create: (view) => {
                const dom = document.createElement("div");
                dom.className = "hechima-cands";
                applyHostFont(dom, view, state.pos);

                // 追加候補は通常候補の**上**に注釈付きで並べる（KeyLogicKit / ラボと同配置）
                additional.forEach((a, i) => {
                    const row = document.createElement("div");
                    row.className =
                        "hechima-cand" + (inAdditional && i === focus.additionalIndex ? " hechima-cand-sel" : "");
                    const ann = document.createElement("span");
                    ann.className = "hechima-cand-ann";
                    ann.textContent = a.annotation;
                    const body = document.createElement("span");
                    body.className = "hechima-cand-body";
                    body.textContent = a.text;
                    row.append(ann, body);
                    dom.appendChild(row);
                });
                if (additional.length) {
                    const div = document.createElement("div");
                    div.className = "hechima-cand-divider";
                    dom.appendChild(div);
                }

                shown.forEach((text, i) => {
                    const abs = start + i;
                    const row = document.createElement("div");
                    row.className =
                        "hechima-cand" + (!inAdditional && abs === idx ? " hechima-cand-sel" : "");
                    const num = document.createElement("span");
                    num.className = "hechima-cand-num";
                    num.textContent = String(i + 1);
                    const body = document.createElement("span");
                    body.className = "hechima-cand-body";
                    body.textContent = text;
                    row.append(num, body);
                    // クリック/タップで選択（ラボと同じ mousedown。click だと mousedown 時点の
                    // フォーカス移動でエディタが blur してしまう）。iPad のタッチも mousedown に合成される
                    row.addEventListener("mousedown", (ev) => {
                        ev.preventDefault();
                        handlers.onSelectCandidate?.(abs);
                    });
                    dom.appendChild(row);
                });

                // ページ位置の点列。1 ページに収まるならフッタごと出さない（情報ゼロなので）
                if (pages > 1 && !inAdditional) {
                    const foot = document.createElement("div");
                    foot.className = "hechima-cand-foot";
                    foot.appendChild(pageDots(pages, page));
                    dom.appendChild(foot);
                }

                // 注目文節の左端にそろえる（文節移動で候補窓も動く）
                return { dom, offset: { x: focusOffsetX(view, state.segments), y: 0 } };
            },
        };
    }

    const setIme = StateEffect.define();
    const setModeFlash = StateEffect.define();

    /** モード切替のフラッシュ表示。ステータスバーの無いモバイルでの唯一のモード可視化 */
    const modeField = StateField.define({
        create: () => null,
        update(value, tr) {
            for (const e of tr.effects) if (e.is(setModeFlash)) return e.value;
            if (!value) return value;
            return tr.docChanged ? { ...value, pos: tr.changes.mapPos(value.pos, 1) } : value;
        },
        provide: (f) =>
            showTooltip.from(f, (v) =>
                v
                    ? {
                          pos: v.pos,
                          above: false, // キャレットの下（上だと行に被って違和感 — 実機の指摘）
                          strictSide: false,
                          arrow: false,
                          create: () => {
                              const dom = document.createElement("div");
                              dom.className = "hechima-mode-badge";
                              dom.textContent = v.text;
                              return { dom };
                          },
                      }
                    : null
            ),
    });

    const imeField = StateField.define({
        create: () => null,
        update(value, tr) {
            for (const e of tr.effects) if (e.is(setIme)) return e.value;
            if (!value) return value;
            // 文書が変わったら位置を追従させる（確定で本文が伸びる等）
            return tr.docChanged ? { ...value, pos: tr.changes.mapPos(value.pos, 1) } : value;
        },
        provide: (f) => [
            EditorView.decorations.from(f, (v) =>
                v && v.segments.length
                    ? Decoration.set([
                          Decoration.widget({ widget: new ComposingWidget(v.segments), side: 1 }).range(v.pos),
                      ])
                    : Decoration.none
            ),
            showTooltip.from(f, (v) => (v ? candidateTooltip(v) : null)),
        ],
    });

    let modeTimer = null;

    // 候補行のクリック/タップ → selectCandidate。view はセッションを知らないので、
    // ime 側が boot 後にここへ実体を差す（null の間は表示専用）
    const handlers = { onSelectCandidate: null };

    return {
        extension: [imeField, modeField],
        handlers,
        /** モード切替をキャレット位置に短時間だけ出す（アニメーションで消え、状態も外す） */
        flashMode(view, text) {
            if (!view) return;
            view.dispatch({
                effects: setModeFlash.of({ text, pos: view.state.selection.main.head }),
            });
            if (modeTimer !== null) clearTimeout(modeTimer);
            modeTimer = setTimeout(() => {
                modeTimer = null;
                view.dispatch({ effects: setModeFlash.of(null) });
            }, 1300);
        },
        /** 未確定を描き替える。segments が空なら消す */
        render(view, segments) {
            if (!view) return;
            const value = segments && segments.length
                ? { segments, pos: view.state.selection.main.head }
                : null;
            view.dispatch({ effects: setIme.of(value) });
        },
        /** 候補窓が出ているか（数字キーの直接選択を先取りするかの判定に使う） */
        hasCandidates(view) {
            const v = view?.state.field(imeField, false);
            return !!v?.segments?.some((s) => s.kind === "focus" && s.candidates?.length);
        },
    };
}


// ==== src/ime.js ====
// 入力層 — 打鍵を配列エンジンに通し、変換セッションへ流す。
//
// 層の関係:
//   CM6 の keydown/keyup → KeyTap → fep.feed/feedUp → KeymapEngine → Hechima → cb
//
// **注ぎ口は 2 つだけに保つ**（`fep.feed` と `fep.insertKana`）。フリックや両手親指入力を
// 将来足すときは 2 本目に繋ぐだけで済み、この層を作り直す必要がない
// （`docs/obsidian-plugin-plan.md` §0.5 — 拡張の口は抽象化ではなく境目の少なさで確保する）。

"use strict";

/**
 * 既定の配列 = **内蔵ローマ字**（hechima のセッション層が持つ合成。`setEngine(null)`）。
 *
 * ラボと QuuBee の既定と同じ構成。JSON の romaji_* は KeymapEngine を通る別物で、
 * 内蔵だけが持つ機能が 2 つある（2026-07-30 実測）:
 *   - 句読点の即時確定（, . → 、。 を直接コミット）
 *   - BS でよみを消して素のローマ字（pending）まで戻ったときの合成復帰
 *     （「dか」→ BS →「d」+ a →「だ」。hechima v0.13.1）
 * 標準的な IME を名乗る以上、既定はこちら。JSON のローマ字は「配列を試す」用として残す。
 */
const BUILTIN_ROMAJI = "builtin_romaji";
const DEFAULT_KEYMAP = BUILTIN_ROMAJI;

/** vault 側の配列を置く場所。ドットフォルダではないので Files アプリからも触れる */
const VAULT_KEYMAP_DIR = "hechima/keymaps";

/**
 * IME の ON/OFF を直接切り替える物理キー。日本語キーボードの「かな」「英数」と、
 * 親指位置の変換/無変換。**届かない環境もある**ので、コマンド + ホットキーが本線で
 * こちらは補助（実測: iPad は Ctrl+Shift 系が素通しで届く）。
 */
const MODE_ON_CODES = new Set(["Lang1", "KanaMode", "Convert"]);
const MODE_OFF_CODES = new Set(["Lang2", "NonConvert"]);

/**
 * リピートを素通しするキー。移動・削除は押しっぱなしで連続動作するのが当然なので殺さない。
 * これ以外（印字キー・chord キー）のリピートは配列エンジンにとって意味を持たない
 * ——「新しい押下」ではないので、渡すと連打と誤解される。
 */
const REPEAT_PASS_CODES = new Set([
    "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
    "Backspace", "Delete", "Home", "End", "PageUp", "PageDown",
]);

/**
 * KeyboardEvent から `KeyTap`（KeyboardEvent 互換の最小形）を作る。
 * `repeat` を明示的に指定できるのが要点で、リピートを 1 打として渡し直すのに使う。
 */
function tapOf(e, repeat) {
    return {
        code: e.code,
        key: e.key,
        repeat,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey,
        metaKey: e.metaKey,
    };
}

/** `cb.hostKey` で来る編集キーを Obsidian の Editor 操作に落とす */
function applyHostKey(editor, name) {
    if (!editor) return;
    const cur = editor.getCursor();
    switch (name) {
        case "Backspace": {
            const off = editor.posToOffset(cur);
            if (off <= 0) return;
            editor.replaceRange("", editor.offsetToPos(off - 1), cur);
            return;
        }
        case "Delete": {
            const off = editor.posToOffset(cur);
            const end = editor.offsetToPos(off + 1);
            editor.replaceRange("", cur, end);
            return;
        }
        case "ArrowLeft":
            editor.setCursor(editor.offsetToPos(Math.max(0, editor.posToOffset(cur) - 1)));
            return;
        case "ArrowRight":
            editor.setCursor(editor.offsetToPos(editor.posToOffset(cur) + 1));
            return;
        case "Enter":
            editor.replaceSelection("\n");
            return;
        default:
            // 未対応のキーは黙って捨てる。編集キーの語彙を広げるのは Phase 4
            return;
    }
}

class HechimaIME {
    constructor(plugin) {
        this.plugin = plugin;
        this.engine = plugin.engine; // HechimaEngine（wasm + cb）
        this.fep = null;
        this.keyEngine = null; // KeymapEngine.InputEngine
        this.keymapId = DEFAULT_KEYMAP;
        this.vaultKeymaps = new Map(); // vault 側の配列（id → JSON）
        this.keymapErrors = []; // 読めなかったファイル（設定画面に出す）
        this.active = false;
        this.booting = null;
        this.composingNotice = null; // CM6 が取れない環境のフォールバック
        this.composing = ""; // 未確定文字列
        this.bsGuardUntil = 0; // BS で合成を消し切った直後の吸収窓の期限
        this.view = createImeView(); // CM6 の表示層（null = フォールバック）
        this.onStatus = null; // ステータスバー更新のフック
    }

    // ---- 配列 ------------------------------------------------------------

    /**
     * 使える配列の一覧。**同梱と vault の両方**から集め、同 id は vault が勝つ。
     * 出所を必ず持たせる（どちらが効いているか分からない状態を作らない）。
     */
    catalog() {
        const out = new Map();
        out.set(BUILTIN_ROMAJI, {
            id: BUILTIN_ROMAJI,
            name: "ローマ字（内蔵・標準）",
            behavior: "sequential",
            origin: "内蔵",
        });
        for (const [id, json] of Object.entries(BUNDLED_KEYMAPS)) {
            out.set(id, { id, name: json.name ?? id, behavior: json.behavior?.type ?? "?", origin: "同梱" });
        }
        for (const [id, json] of this.vaultKeymaps) {
            out.set(id, {
                id,
                name: json.name ?? id,
                behavior: json.behavior?.type ?? "?",
                origin: out.has(id) ? "vault（同梱を上書き）" : "vault",
            });
        }
        return [...out.values()];
    }

    /** id → JSON。vault が同梱に勝つ */
    keymapJson(id) {
        return this.vaultKeymaps.get(id) ?? BUNDLED_KEYMAPS[id] ?? null;
    }

    /**
     * vault の配列を読み込む。**1 ファイルの不正で全体を落とさない**（未知のキー名で
     * 例外を投げる仕様なので、書きかけを保存した瞬間などに必ず起きる）。
     * 失敗は errors に溜めて設定画面に並べる。
     */
    async loadVaultKeymaps() {
        const adapter = this.plugin.app.vault.adapter;
        const next = new Map();
        this.keymapErrors = [];
        let listing;
        try {
            listing = await adapter.list(VAULT_KEYMAP_DIR);
        } catch {
            this.vaultKeymaps = next; // フォルダが無いのが普通
            return;
        }
        for (const path of listing.files ?? []) {
            if (!path.endsWith(".json")) continue;
            const id = path.split("/").pop().replace(/\.json$/, "");
            try {
                const json = JSON.parse(await adapter.read(path));
                KeymapEngine.decodeKeymap(json); // 読める形か先に確かめる
                next.set(id, json);
            } catch (e) {
                this.keymapErrors.push(`${path}: ${String(e?.message ?? e)}`);
            }
        }
        this.vaultKeymaps = next;
    }

    /** 配列を差し替える。合成中なら KeymapEngine 側が確定してから切り替える */
    setKeymap(id) {
        if (id === BUILTIN_ROMAJI) {
            // 内蔵ローマ字 = エンジンを挿さない。かな合成はセッション層が行う
            this.keymapId = id;
            this.keyEngine = null;
            this.fep?.setEngine(null);
            this.onStatus?.();
            return;
        }
        const json = this.keymapJson(id);
        if (!json) throw new Error(`配列が見つからない: ${id}`);
        const expanded = KeymapEngine.decodeKeymap(json);
        if (this.keyEngine) {
            this.keyEngine.setKeymap(expanded);
        } else {
            this.keyEngine = new KeymapEngine.InputEngine(expanded);
            // タイマー駆動の chord 確定を拾う。配線はホスト側の責務
            this.keyEngine.onStateChange = () => this.fep?.pumpEngine();
        }
        this.keymapId = id;
        this.fep?.setEngine(this.keyEngine, (tap) => KeymapEngine.keyEventFromBrowser(tap));
        this.onStatus?.();
    }

    keymapName() {
        if (this.keymapId === BUILTIN_ROMAJI) return "ローマ字（内蔵）";
        return this.keymapJson(this.keymapId)?.name ?? this.keymapId;
    }

    // ---- セッション ------------------------------------------------------

    editor() {
        return this.plugin.app.workspace.activeEditor?.editor ?? null;
    }

    /**
     * 生の EditorView。Obsidian は Editor に `cm` として持たせている（公式 API ではないが
     * 実質の標準経路）。取れなければ表示は Notice にフォールバックする。
     */
    cmView() {
        return this.editor()?.cm ?? null;
    }

    /** wasm とセッションを起動する（多重起動しない） */
    boot() {
        if (this.fep) return Promise.resolve(this.fep);
        if (this.booting) return this.booting;
        this.booting = (async () => {
            await this.engine.boot();
            this.fep = Hechima.createFep({
                ...this.engine.callbacks(),
                show: (segments) => this.show(segments),
                hide: () => this.hide(),
                // **確定したら表示を消すのはホストの責務**（cb 契約。hechima は hide を呼ばない）。
                // 消し忘れると未確定表示が確定後も残る。
                commit: (text) => {
                    this.editor()?.replaceSelection(text);
                    this.hide();
                },
                hostKey: (name) => applyHostKey(this.editor(), name),
                retract: (text) => this.retract(text),
            });
            this.setKeymap(this.keymapId);
            // 候補行のクリック/タップ（表示層からの唯一の逆方向配線）
            if (this.view) this.view.handlers.onSelectCandidate = (i) => this.fep.selectCandidate(i);
            return this.fep;
        })();
        this.booting.catch(() => { this.booting = null; });
        return this.booting;
    }

    /**
     * 未確定と候補を描く。**文書には何も書かない**（Decoration.widget + showTooltip）。
     * CM6 が取れない環境だけ Notice に落ちる。
     */
    show(segments) {
        this.composing = segments.map((s) => s.text).join("");
        this.lastSegments = segments;
        if (this.view) {
            this.view.render(this.cmView(), segments);
            return;
        }
        this.composingNotice?.hide();
        this.composingNotice = this.composing ? new Notice(`▽ ${this.composing}`, 0) : null;
    }

    hide() {
        this.composing = "";
        this.lastSegments = null;
        if (this.view) {
            this.view.render(this.cmView(), null);
            return;
        }
        this.composingNotice?.hide();
        this.composingNotice = null;
    }

    /** 確定アンドゥの文書側協力。末尾が一致するときだけ取り除く */
    retract(text) {
        const editor = this.editor();
        if (!editor) return false;
        const to = editor.getCursor();
        const off = editor.posToOffset(to);
        if (off < text.length) return false;
        const from = editor.offsetToPos(off - text.length);
        if (editor.getRange(from, to) !== text) return false;
        editor.replaceRange("", from, to);
        return true;
    }

    // ---- ON/OFF ----------------------------------------------------------

    async setActive(on) {
        if (on) {
            await this.boot();
            this.active = true;
            this.fep.setActive(true);
        } else {
            this.active = false;
            this.fep?.setActive(false);
            this.hide();
        }
        this.onStatus?.();
        // モバイルにはステータスバーが無いので、キャレット位置に短時間のバッジを出す。
        // Notice の常時表示は邪魔（実機の指摘）— 切り替えた瞬間だけ、その場で分かればよい
        // 文言は配列名 / 「直接入力」のみ（「あ」「A」のプレフィックスは冗長 — 実機の指摘）
        this.view?.flashMode(this.cmView(), on ? this.keymapName() : "直接入力");
    }

    async toggle() {
        await this.setActive(!this.active);
        return this.active;
    }

    // ---- 打鍵 ------------------------------------------------------------

    /**
     * keydown を捌く。true を返すと CM6 にも既定動作にも渡さない。
     *
     * **キーリピートは弾く**。押しっぱなしで keydown だけが繰り返す環境があり
     * （ChromeOS デスクトップ実測 30ms 間隔。iPad では出ない）、素通しすると連打と
     * 誤解されて相互シフトの「押している間」が壊れる。
     */
    handleKeyDown(e) {
        if (MODE_ON_CODES.has(e.code)) {
            // JIS の変換キー: **選択があれば再変換、なければ IME ON**（標準 IME / ラボの作法）。
            // 再変換は keymap JSON の語彙ではない — 操作対象が確定済みテキスト = ホストの
            // 文書なので、keymap の管轄（キー入力→かな解決）の外にあり、ホストの方針で拾う
            // （ラボも app.ts の keydown 直接処理。keymap-v2-sketch §3.5 の文書所有権の境界）。
            const sel = this.editor()?.getSelection?.() ?? "";
            if (e.code === "Convert" && sel && !this.isComposing()) {
                void this.reconvertSelection();
            } else {
                void this.setActive(true);
            }
            e.preventDefault();
            return true;
        }
        if (MODE_OFF_CODES.has(e.code)) {
            void this.setActive(false);
            e.preventDefault();
            return true;
        }
        if (!this.active || !this.fep) return false;

        if (e.repeat) {
            // **印字キー・chord キーのリピートは常に捨てる。**
            // 「合成中だけ捨てる」ではいけない: chord の 1 キー目を押しっぱなしにしている間は
            // エンジンが解決を待っていて未確定表示がまだ無いため、素通しした文字が本文に漏れる
            // （実測: 薙刀式で N を保持すると "nnnnnnnn" が入り、F を足して初めて「だ」になる）。
            //
            // 移動・削除系のリピート:
            //   合成中 → **セッションのもの**（候補送り・よみの末尾削除）。素通しすると
            //     キャレットが動いて未確定表示の位置がずれ、入力位置ごと崩れる（実機で発生）
            //   非合成 → 既定動作に任せる。渡すとセッションが取り込んでしまい
            //     （非リピートでは取り込まないのに、リピートだと取り込む）カーソルが動かない
            if (REPEAT_PASS_CODES.has(e.code)) {
                if (!this.isComposing()) return false;
                // **repeat を落として渡す。** セッション（と配列エンジン）はリピートを
                // 「新しい押下ではない」として無視するので、そのまま渡すと候補窓の中で
                // ↑↓ の押しっぱなしが効かない。ホスト側で 1 打として作り直す。
                const taken = this.fep.feed(tapOf(e, false));
                e.preventDefault(); // 合成中は既定動作に落とさない（キャレットが動く）
                return true;
            }
            e.preventDefault();
            return true;
        }

        // BS の吸収窓（上記 feedOrPass 参照）。リピート経路より先に判定する
        if (
            e.code === "Backspace" && !this.isComposing() &&
            performance.now() < this.bsGuardUntil
        ) {
            this.bsGuardUntil = performance.now() + 250; // 連打が続く限り延長
            e.preventDefault();
            return true;
        }

        // 候補窓が出ている間の 1-9 = 窓内の直接選択（標準 IME の作法）。
        // セッションの routing には触れず、ホストの方針としてここで先取りする。
        if (
            /^[1-9]$/.test(e.key) && !e.ctrlKey && !e.altKey && !e.metaKey &&
            this.view?.hasCandidates(this.cmView()) && this.selectInWindow(Number(e.key))
        ) {
            e.preventDefault();
            return true;
        }

        return this.feedOrPass(e);
    }

    /**
     * 候補窓の n 番目（1 起点）を選ぶ。**起点は表示側と同じページ送りの式**で求める
     * （ここがずれると番号と候補の対応が壊れる）。
     */
    selectInWindow(n) {
        const focus = this.lastSegments?.find((s) => s.kind === "focus");
        const cands = focus?.candidates;
        if (!cands?.length) return false;
        const idx = focus.candidateIndex ?? 0;
        const target = Math.floor(idx / 9) * 9 + (n - 1);
        return target < cands.length && this.fep.selectCandidate(target);
    }

    feedOrPass(e) {
        const wasComposing = this.isComposing();
        const taken = this.fep.feed(e);
        if (taken) e.preventDefault();
        // **BS で合成を消し切った直後の吸収窓。** よみを BS 連打で消していると、最後の
        // 1 文字が消えた次の打鍵から本文に効いてしまい、「未確定を消していたつもりが
        // 本文の文字まで消えた」事故になる（iPad 実機で報告）。消し切りから短時間だけ
        // 追加の BS を握り潰す。確定（Enter 等）で合成が終わった場合は張らない —
        // 確定直後の BS は本文への意図的な削除なので効くべき。
        if (wasComposing && !this.isComposing() && e.code === "Backspace") {
            this.bsGuardUntil = performance.now() + 250;
        }
        return taken;
    }

    handleKeyUp(e) {
        if (!this.active || !this.fep) return false;
        // feedUp は chord のシフトホールド判定に必要。取り込んでも既定動作は止めない
        this.fep.feedUp(e);
        return false;
    }

    isComposing() {
        return this.composing.length > 0;
    }

    /**
     * 確定済みテキストの再変換。選択範囲を surface として fep.reconvert に渡す。
     *
     * 作法は d.ts / ラボの doReconvert と同じ:
     *   1. 選択を検証（空・改行入り・64 文字超は対象外）
     *   2. **先に**文書から選択範囲を取り除く（composition がその位置に開く）
     *   3. fep.reconvert(surface) — false（逆変換不能）なら取り除いた分を戻す
     */
    async reconvertSelection() {
        if (this.isComposing()) return false; // 合成中は対象外（標準 IME と同じ）
        const editor = this.editor();
        if (!editor) return false;
        const surface = editor.getSelection?.() ?? "";
        if (!surface || surface.includes("\n") || Array.from(surface).length > 64) return false;
        await this.boot();
        if (!this.active) await this.setActive(true); // 再変換は IME ON を含意する
        editor.replaceSelection(""); // 取り除いた位置に候補が開く
        const ok = await this.fep.reconvert(surface);
        if (!ok) {
            editor.replaceSelection(surface); // 逆変換不能 → 元に戻す
            new Notice("hechima: 再変換できませんでした");
        }
        return ok;
    }

    /** セッションを初期状態に戻す。fep.reset() は表示を消さない（hide はホスト責務）ので対で行う */
    reset() {
        this.fep?.reset();
        this.hide();
    }

    dispose() {
        this.hide();
        this.fep?.reset();
        this.fep = null;
        this.keyEngine = null;
        this.booting = null;
        this.active = false;
    }
}


// ==== src/probe.js ====
// hechima probe — Obsidian で mozc wasm が起動して変換できるかだけを測る偵察プラグイン。
//
// 目的は一点: 「Obsidian iOS（iPad）でこのプラグインが hechima の変換エンジンを動かせるか」。
// ここが割れると Obsidian 版 hechima の設計が根本から変わる（desktop-only に落ちるか、
// タブレット両手親指入力と合流できるか）ので、入力層を作る前に先に測る。
//
// 設計の要点 —— URL と戦わずバイトを食わせる:
//   Obsidian mobile は WKWebView + Capacitor で、プラグインのファイルは vault の中にある。
//   emscripten の既定経路（locateFile → fetch/instantiateStreaming）は、この環境で
//   どの URL スキームが通るかという別問題に依存してしまう。
//   そこで .wasm も mozc.data も vault アダプタで **バイト列として読み**、
//   `wasmBinary` と `FS.writeFile` で直接渡す。URL 解決が一切要らなくなる。
//
// Worker も使わない。hechima-wasm は 2026-07-25 に単スレッド化済み（init 約 156ms）で
// メインスレッドで完結する。Worker は「メインスレッドで動く」が確認できた後の最適化であって、
// 偵察で同時に賭ける変数ではない。

"use strict";

const { Plugin, Notice, Modal, Setting, PluginSettingTab, Platform, apiVersion, requestUrl } = require("obsidian");

// CodeMirror 6 は Obsidian が外部モジュールとして提供する。無い環境（node ハーネス等）でも
// wasm 偵察だけは動かせるよう、取得失敗はここで飲み込む。
let cmView = null;
let cmState = null;
let cmLoadError = null;
try {
    cmView = require("@codemirror/view");
    cmState = require("@codemirror/state");
} catch (e) {
    cmLoadError = String(e?.message ?? e);
}

/** 偵察で必ず通す変換 */
const SAMPLE_YOMI = "きょうはいいてんきですね";

// BENIGN_STDERR / fixedOffsetTzName / mb は engine.js が持つ（結合されて同じスコープにいる）。
// 偵察と本番で wasm の起動経路を 1 本にした結果、ここでの重複が不要になった。

/** 計測付きの逐次実行。どの段で落ちたかが行として残るのがこのプラグインの成果物 */
class Report {
    constructor() {
        this.lines = [];
        this.failed = false;
    }

    note(text) {
        this.lines.push(`      ${text}`);
    }

    async step(name, fn) {
        if (this.failed) {
            this.lines.push(`SKIP  ${name}`);
            return null;
        }
        const t0 = performance.now();
        try {
            const result = await fn();
            const ms = (performance.now() - t0).toFixed(0);
            this.lines.push(`OK    ${name} — ${ms}ms`);
            return result;
        } catch (e) {
            const ms = (performance.now() - t0).toFixed(0);
            this.lines.push(`FAIL  ${name} — ${ms}ms`);
            this.lines.push(`      ${String(e?.stack ?? e?.message ?? e)}`);
            this.failed = true;
            return null;
        }
    }

    toText() {
        return this.lines.join("\n");
    }
}

class ReportModal extends Modal {
    constructor(app, title, text) {
        super(app);
        this.title = title;
        this.text = text;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.createEl("h3", { text: this.title });

        const pre = contentEl.createEl("pre", { text: this.text });
        pre.style.userSelect = "text";
        pre.style.whiteSpace = "pre-wrap";
        pre.style.wordBreak = "break-word";
        pre.style.fontSize = "0.8em";
        pre.style.maxHeight = "60vh";
        pre.style.overflowY = "auto";

        const bar = contentEl.createDiv();
        bar.style.display = "flex";
        bar.style.gap = "8px";
        bar.style.marginTop = "12px";

        const copy = bar.createEl("button", { text: "コピー" });
        copy.onclick = async () => {
            await navigator.clipboard.writeText(this.text);
            new Notice("結果をコピーしました");
        };

        const save = bar.createEl("button", { text: "vault に保存" });
        save.onclick = async () => {
            const path = "hechima-probe-result.md";
            const body = `# hechima probe\n\n\`\`\`\n${this.text}\n\`\`\`\n`;
            await this.app.vault.adapter.write(path, body);
            new Notice(`${path} に保存しました`);
        };
    }

    onClose() {
        this.contentEl.empty();
    }
}

module.exports = class HechimaProbePlugin extends Plugin {
    async onload() {
        this.settings = Object.assign({ keymapId: "builtin_romaji" }, await this.loadData());
        // 0.3.0 までの既定は romaji_jis（JSON）だった。内蔵ローマ字にしか無い機能
        // （句読点の即時確定・BS 後の pending 復帰）があるため、旧既定のままの設定は
        // 新既定へ移行する。明示的に JSON 版を使いたい人は選び直せる
        if (this.settings.keymapId === "romaji_jis") this.settings.keymapId = "builtin_romaji";
        this.engine = new HechimaEngine(this.app, this.manifest);
        // 初回だけ辞書のダウンロードで数十秒かかる。黙って止まったように見えないようにする
        this.engine.onProgress = (msg) => {
            this.dlNotice?.hide();
            this.dlNotice = msg ? new Notice(`hechima: ${msg}`, 0) : null;
        };
        this.ime = new HechimaIME(this);
        this.ime.keymapId = this.settings.keymapId;
        this.fep = null; // 偵察の「テスト変換」用（IME とは別に持つ）
        this.capturing = false; // キー入力の偵察が動いているか
        this.keyLog = [];
        this.captureStartedAt = 0;
        this.docLenAtStart = 0;

        this.addRibbonIcon("languages", "hechima 偵察を実行", () => this.run());
        this.addCommand({
            id: "run",
            name: "エンジン偵察を実行（wasm 起動 → 変換）",
            callback: () => this.run(),
        });
        this.addCommand({
            id: "reset",
            name: "エンジンを破棄して初期化から測り直す",
            callback: () => {
                this.engine.dispose();
                this.fep = null;
                new Notice("破棄しました。次の実行で初期化から測ります");
            },
        });
        this.addCommand({
            id: "wiring",
            name: "配線を確認（結合した 3 本の版）",
            callback: () => {
                const v = HechimaProbePlugin.__vendor;
                new ReportModal(
                    this.app,
                    "配線",
                    [
                        `HechimaModule  ${typeof v.HechimaModule === "function" ? "OK（wasm factory）" : "見つからない"}`,
                        `KeymapEngine   ${v.KeymapEngine?.version ? `v${v.KeymapEngine.version}` : "見つからない"}`,
                        `Hechima        ${v.Hechima?.version ? `v${v.Hechima.version}` : "見つからない"}`,
                        `CodeMirror     ${cmView && cmState ? "OK" : `取得できない: ${cmLoadError ?? "不明"}`}`,
                    ].join("\n")
                ).open();
            },
        });
        this.addCommand({
            id: "test-conversion",
            name: "テスト変換（キーボードを使わずセッション層を通す）",
            editorCallback: (editor) => void this.testConversion(editor),
        });
        this.addCommand({
            id: "toggle-key-capture",
            name: "キー入力の偵察: 開始 / 停止",
            editorCallback: (editor, view) => this.toggleCapture(view),
        });

        this.addCommand({
            id: "reconvert",
            name: "再変換（選択したテキストを変換し直す）",
            editorCallback: () => void this.ime.reconvertSelection(),
        });
        this.addCommand({
            id: "toggle-ime",
            name: "日本語入力の ON / OFF",
            callback: () => void this.ime.toggle(),
        });

        // ステータスバー（モバイルには出ないが、あっても害はない）
        this.statusEl = this.addStatusBarItem();
        this.ime.onStatus = () => this.renderStatus();
        this.renderStatus();
        this.statusEl.onclick = () => void this.ime.toggle();

        this.addSettingTab(new HechimaSettingTab(this.app, this));

        // vault 側の配列を読み、**保存した瞬間に反映する**。
        // Obsidian で JSON を編集してそのまま打ち比べられる = ラボより速い試打環境になる。
        await this.ime.loadVaultKeymaps();
        const reload = async (file) => {
            if (!file?.path?.startsWith("hechima/keymaps/")) return;
            await this.ime.loadVaultKeymaps();
            try {
                this.ime.setKeymap(this.settings.keymapId);
                new Notice(`hechima: 配列を再読込（${this.ime.keymapName()}）`);
            } catch (e) {
                new Notice(`hechima: 配列の再読込に失敗 — ${String(e?.message ?? e)}`);
            }
        };
        for (const ev of ["modify", "create", "delete", "rename"]) {
            this.registerEvent(this.app.vault.on(ev, reload));
        }

        this.registerKeyProbe();
        this.registerImeKeys();

        // 表示層（未確定の Decoration + 候補の showTooltip）
        if (this.ime.view) {
            this.register(injectStyles()); // unload で撤去（次のロードで確実に差し替わる）
            this.registerEditorExtension(this.ime.view.extension);
        }
    }

    renderStatus() {
        if (!this.statusEl) return;
        this.statusEl.setText(this.ime.active ? `あ ${this.ime.keymapName()}` : "A");
        this.statusEl.title = this.ime.active
            ? `hechima: ${this.ime.keymapName()}（クリックで OFF）`
            : "hechima: OFF（クリックで ON）";
    }

    /**
     * 打鍵の横取り。**偵察が動いている間は IME に渡さない**（偵察は全部握り潰すので、
     * 両方が preventDefault を主張すると何が起きているか分からなくなる）。
     */
    registerImeKeys() {
        if (!cmView || !cmState) return;
        const { EditorView } = cmView;
        const { Prec } = cmState;
        this.registerEditorExtension(
            Prec.highest(
                EditorView.domEventHandlers({
                    keydown: (e) => (this.capturing ? false : this.ime.handleKeyDown(e)),
                    keyup: (e) => (this.capturing ? false : this.ime.handleKeyUp(e)),
                })
            )
        );
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    onunload() {
        this.dlNotice?.hide();
        this.ime?.dispose();
        this.engine?.dispose();
        this.fep?.reset();
        this.fep = null;
        this.capturing = false;
    }

    // ------------------------------------------------------------------
    // 変換セッション（Phase 1）
    //
    // ここではキー入力に触れない。`insertKana` でかなを入れ、合成した KeyTap を
    // `feed` に流して変換・確定まで到達させる。入力層とセッション層の配線を
    // 同時に賭けないための切り分けで、通れば残りはキー入力を前段に繋ぐだけになる。
    // ------------------------------------------------------------------

    /** 現在の編集対象。commit / hostKey の宛先になる */
    activeEditor() {
        return this.app.workspace.activeEditor?.editor ?? null;
    }

    /** セッションを用意する（多重生成しない）。cb のうちエンジン分は engine.callbacks() */
    async session() {
        if (this.fep) return this.fep;
        await this.engine.boot();
        this.fep = Hechima.createFep({
            ...this.engine.callbacks(),
            // Phase 1 の表示は Notice。Decoration / showTooltip は Phase 3
            show: (segments) => {
                const text = segments.map((s) => s.text).join("");
                if (this.composingNotice) this.composingNotice.hide();
                this.composingNotice = new Notice(`▽ ${text}`, 0);
            },
            hide: () => {
                this.composingNotice?.hide();
                this.composingNotice = null;
            },
            commit: (text) => {
                const editor = this.activeEditor();
                if (!editor) return;
                editor.replaceSelection(text);
            },
            // 確定アンドゥの文書側協力。末尾が一致するときだけ取り除く（Phase 4 で本使用）
            retract: (text) => {
                const editor = this.activeEditor();
                if (!editor) return false;
                const to = editor.getCursor();
                const from = editor.offsetToPos(Math.max(0, editor.posToOffset(to) - text.length));
                if (editor.getRange(from, to) !== text) return false;
                editor.replaceRange("", from, to);
                return true;
            },
        });
        this.fep.setActive(true);
        return this.fep;
    }

    /**
     * Phase 1 の完了条件。キーボードに一切触れず、
     * かな投入 → 変換 → 確定 が本文に入るところまでを通す。
     */
    async testConversion(editor) {
        const notice = new Notice("hechima: セッションを起動中…", 0);
        try {
            const fep = await this.session();
            fep.reset();
            if (!fep.insertKana(SAMPLE_YOMI)) throw new Error("insertKana が受け付けられなかった");
            // 変換と確定は合成した打鍵で行う。KeyTap は KeyboardEvent 互換の最小形なので、
            // Phase 2 で本物のイベントに差し替えても同じ経路を通る。
            if (!fep.feed({ key: " ", code: "Space" })) throw new Error("変換（Space）が届かなかった");
            await new Promise((res) => setTimeout(res, 0)); // convert は非同期
            const before = editor?.getValue?.().length ?? 0;
            fep.feed({ key: "Enter", code: "Enter" });
            const after = editor?.getValue?.().length ?? 0;
            notice.hide();
            new Notice(
                after > before
                    ? `hechima: 確定しました（+${after - before} 文字）`
                    : "hechima: 確定が本文に入らなかった"
            );
        } catch (e) {
            notice.hide();
            new Notice(`hechima: 失敗 — ${String(e?.message ?? e)}`);
        }
    }

    // ------------------------------------------------------------------
    // キー入力の偵察 — エディタが keymap-v2-sketch §1.5 の何段かを実機で決める。
    //
    // 測るのは 4 つ。**イベントの有無と、そこに載っている情報量は別物**である点が肝で、
    // 初版はここを取り違えていた（数だけ数えて L3 と判定していた）。
    //
    //   1. keydown / keyup が届くか … 押下集合を作れるかの必要条件
    //   2. **そのイベントがキーを識別できるか** … 印字キーが OS の入力方式（IME）に食われる
    //      環境では、keydown は来るのに code が空・key="Unidentified" になる。
    //      押下集合が作れても「どのキーか」が無ければ逐次系すら組めない = L2 未満
    //      （2026-07-29 実測: ChromeOS 上の Android アプリ + 物理キーボード。
    //       Android 実機 + Bluetooth キーボードは未実測 — 一般化しないこと）
    //   3. preventDefault で文字入力を抑止できるか … できないと IME を載せられない
    //   4. beforeinput で拾えるか … 2 が駄目でも、文字列として横取りできれば L1 = 逐次系
    //      （ローマ字・月配列・AZIK）までは載る。救済経路があるかを同時に測る
    // ------------------------------------------------------------------

    registerKeyProbe() {
        if (!cmView || !cmState) return;
        const { EditorView } = cmView;
        const { Prec } = cmState;

        const record = (type, e) => {
            if (!this.capturing) return false;
            this.keyLog.push({
                t: Math.round(performance.now() - this.captureStartedAt),
                type,
                code: e.code,
                key: e.key,
                // OS のキーリピート。押しっぱなしで keydown だけが繰り返し届く（keyup は無い）。
                // 配列エンジンに素通しすると「連打」と誤解されるので、Phase 2 では
                // KeyTap.repeat として渡して弾く必要がある。
                repeat: e.repeat === true,
                composing: e.isComposing === true,
                mods:
                    [e.ctrlKey && "Ctrl", e.altKey && "Alt", e.shiftKey && "Shift", e.metaKey && "Meta"]
                        .filter(Boolean)
                        .join("+") || "-",
            });
            e.preventDefault();
            return true; // CM6 にも渡さない
        };

        const recordInput = (e) => {
            if (!this.capturing) return false;
            this.keyLog.push({
                t: Math.round(performance.now() - this.captureStartedAt),
                type: "input",
                inputType: e.inputType,
                data: e.data,
                cancelable: e.cancelable === true,
                composing: e.isComposing === true,
            });
            e.preventDefault();
            return true;
        };

        // Prec.highest でないと Obsidian 自身のホットキーや CM6 既定 keymap に先を越される
        this.registerEditorExtension(
            Prec.highest(
                EditorView.domEventHandlers({
                    keydown: (e) => record("down", e),
                    keyup: (e) => record("up", e),
                    beforeinput: (e) => recordInput(e),
                })
            )
        );
    }

    toggleCapture(view) {
        if (this.capturing) {
            this.capturing = false;
            const docLen = view?.editor?.getValue?.().length ?? this.docLenAtStart;
            new ReportModal(
                this.app,
                "キー入力の偵察",
                this.keyReport(docLen - this.docLenAtStart)
            ).open();
            return;
        }
        if (!cmView || !cmState) {
            new Notice(`CodeMirror を取得できない: ${cmLoadError ?? "不明"}`);
            return;
        }
        this.keyLog = [];
        this.captureStartedAt = performance.now();
        this.docLenAtStart = view?.editor?.getValue?.().length ?? 0;
        this.capturing = true;
        new Notice("記録中。何か打鍵して、もう一度同じコマンドで停止", 5000);
    }

    /**
     * keydown〜keyup の保持時間（ms）を集める。`anonymous` で無名キーだけ / 識別キーだけを選ぶ。
     *
     * これが判定の核心になる。人間の打鍵は 50〜150ms なので、**保持時間が一桁 ms しか出ない
     * 場合、そのイベントは実際の押下ではなく確定時点の合成**とみなせる（実測: 無名 2ms /
     * 実キー 95ms。ChromeOS 上の Android アプリ）。保持時間が無ければ、ホールドを意味に使う方式 — 薙刀式の相互シフト、
     * 新下駄の同時打鍵、SandS — は近似ではなく原理的に組めない。
     */
    holdDurations(anonymous) {
        const isAnon = (k) => !(k.code && k.key && k.key !== "Unidentified");
        const out = [];
        const byCode = new Map();
        const anonQueue = [];
        for (const k of this.keyLog) {
            if (k.type !== "down" && k.type !== "up") continue;
            if (isAnon(k) !== anonymous) continue;
            if (k.type === "down") {
                if (anonymous) anonQueue.push(k.t);
                // リピートは新しい押下ではない。上書きすると保持時間が最後のリピートからになり、
                // 「長く押していた」という事実が消える（ChromeOS デスクトップ実測で判明）
                else if (!byCode.has(k.code)) byCode.set(k.code, k.t);
                continue;
            }
            // 無名は同定できないので押下順に対応させる（重なりがあれば当然ずれるが、
            // 「合成かどうか」を見るには十分）
            const t0 = anonymous ? anonQueue.shift() : byCode.get(k.code);
            if (t0 == null) continue;
            if (!anonymous) byCode.delete(k.code);
            out.push(k.t - t0);
        }
        return out;
    }

    /**
     * 押下の重なりを調べる。返り値 = { maxHeld, nested } 。
     *
     * ホールド方式の可否を決めるのは、実は保持時間そのものより**重なりが見えるか**である。
     * 「A を押したまま S を打つ」が「A を離してから S を打つ」と区別できて初めて、
     * 相互シフト（薙刀式）や同時打鍵（新下駄）が成立する。
     * nested = 誰かを押している最中に別のキーの keydown が来た回数。
     */
    keyOverlap() {
        const held = new Set();
        let maxHeld = 0;
        let nested = 0;
        for (const k of this.keyLog) {
            if (k.type === "down") {
                if (held.size > 0 && !held.has(k.code)) nested += 1;
                held.add(k.code);
                maxHeld = Math.max(maxHeld, held.size);
            } else if (k.type === "up") {
                held.delete(k.code);
            }
        }
        return { maxHeld, nested };
    }

    /**
     * 押下区間を**再構成**する。
     *
     * 環境によっては、押下が無名（IME 由来の合成）でも **離鍵だけは本物が届く**
     * （2026-07-29 実測: Android スマホ + Bluetooth キーボード）。この場合、
     *   押下時刻 = 無名 keydown（＝確定時点 ≒ 実際に押した瞬間）
     *   キーの同定と離鍵時刻 = その後に来る、識別できた keyup
     * を突き合わせれば区間が戻る。**情報は入力に在るが、2 種類のイベントに分かれている**。
     *
     * 対応づけは文字で行う。先着順にすると、保持中のキー（a を押したまま s d f）で
     * a の押下が s の離鍵に誤って結び付く。beforeinput の data と keyup の key を
     * 大文字小文字を無視して照合すれば、保持していても正しい相手に届く。
     */
    reconstruct() {
        const pairs = [];
        const log = this.keyLog;
        const identified = (k) => k.code && k.key && k.key !== "Unidentified";

        // 実 keydown と対になっている keyup は、その押下のもの。再構成に使ってはいけない。
        // （ChromeOS の実測ログでは、これを見ていなかったせいで無名の "a" が 6.7 秒後の
        //  Alt+A の離鍵と結び付き、保持 6706ms という偽の区間ができた）
        const claimed = new Set();
        const open = new Map();
        for (let i = 0; i < log.length; i += 1) {
            const k = log[i];
            if (!identified(k)) continue;
            if (k.type === "down") open.set(k.code, i);
            else if (open.has(k.code)) {
                claimed.add(i);
                open.delete(k.code);
            }
        }

        // 人間の打鍵として無理のない上限。これを超える対応づけは誤りとみなす
        const MAX_HOLD_MS = 5000;

        for (let i = 0; i < log.length; i += 1) {
            const bi = log[i];
            if (bi.type !== "input" || typeof bi.data !== "string" || bi.data.length !== 1) continue;
            // 直前の無名 keydown を押下時刻とみなす
            let t0 = bi.t;
            for (let j = i - 1; j >= 0 && j >= i - 3; j -= 1) {
                if (log[j].type === "down") {
                    t0 = log[j].t;
                    break;
                }
            }
            // 以降で最初に来る「同じ文字の、識別できた keyup」
            for (let j = i + 1; j < log.length; j += 1) {
                const k = log[j];
                if (k.t - t0 > MAX_HOLD_MS) break;
                if (k.type !== "up" || !identified(k)) continue;
                if (claimed.has(j)) continue; // 実 keydown の相方は取らない
                if (k.key.toLowerCase() !== bi.data.toLowerCase()) continue;
                pairs.push({ char: bi.data, code: k.code, t0, t1: k.t });
                break;
            }
        }
        // 再構成した区間どうしの入れ子（あるキーの保持中に別のキーが押された回数）
        let nested = 0;
        for (const p of pairs) {
            for (const q of pairs) {
                if (p === q) continue;
                if (q.t0 > p.t0 && q.t0 < p.t1) {
                    nested += 1;
                    break;
                }
            }
        }
        return { pairs, nested };
    }

    static median(xs) {
        if (!xs.length) return null;
        const s = [...xs].sort((a, b) => a - b);
        return s[Math.floor(s.length / 2)];
    }

    keyReport(docDelta) {
        const lines = [];
        const downs = this.keyLog.filter((k) => k.type === "down");
        const ups = this.keyLog.filter((k) => k.type === "up");
        const inputs = this.keyLog.filter((k) => k.type === "input");
        const composing = this.keyLog.filter((k) => k.composing);

        // 「どのキーか」が載っているか。印字キーが OS の入力方式に食われる環境では
        // keydown は来るのに code が空・key="Unidentified" になる。修飾キーだけは識別できるので、
        // 件数ではなく**識別できた割合**を見ないと取り違える。
        const identified = downs.filter((k) => k.code && k.key && k.key !== "Unidentified");
        const anonymous = downs.length - identified.length;
        const insertedText = inputs.filter((k) => typeof k.data === "string" && k.data.length);
        const cancelableInputs = inputs.filter((k) => k.cancelable);
        const namedHold = this.holdDurations(false);
        const anonHold = this.holdDurations(true);

        lines.push("== 計測 ==");
        lines.push(`イベント    keydown ${downs.length} / keyup ${ups.length} / beforeinput ${inputs.length}`);
        lines.push(`キー識別    ${identified.length} 件が code を持つ / ${anonymous} 件が無名`);
        lines.push(`抑止        本文 ${docDelta >= 0 ? "+" : ""}${docDelta} 文字`);
        lines.push(
            `beforeinput 打てる文字 ${insertedText.length} 件 / cancelable ${cancelableInputs.length} 件`
        );
        lines.push(`isComposing ${composing.length} 件`);
        const repeats = downs.filter((k) => k.repeat);
        lines.push(
            `キーリピート ${repeats.length} 件` +
                (repeats.length ? "（押しっぱなしで keydown が繰り返す = repeat で弾く必要あり）" : "")
        );
        const med = (xs) => {
            const m = HechimaProbePlugin.median(xs);
            return m === null ? "—" : `${m}ms（${xs.length} 件）`;
        };
        lines.push(`保持時間    識別キー ${med(namedHold)} / 無名キー ${med(anonHold)}`);
        const overlap = this.keyOverlap();
        lines.push(`押下の重なり 同時に最大 ${overlap.maxHeld} キー / 入れ子 ${overlap.nested} 回`);
        const rec = this.reconstruct();
        const recHold = rec.pairs.map((p) => p.t1 - p.t0);
        if (rec.pairs.length) {
            lines.push(
                `再構成      ${rec.pairs.length}/${insertedText.length} 件が復元 ` +
                    `/ 保持 ${med(recHold)} / 入れ子 ${rec.nested} 回`
            );
        }

        lines.push("");
        lines.push("== 判定 ==");
        if (!downs.length && !inputs.length) {
            lines.push("FAIL  何も届かない — エディタにフォーカスして打鍵したか確認");
        } else if (anonymous > 0) {
            // 無名が 1 件でもあれば物理キーとしては駄目。修飾キーだけは識別できる環境が
            // あるので、「識別できたものが 0 件か」で分岐すると取り逃がす。
            const synthetic = anonHold.length && (HechimaProbePlugin.median(anonHold) ?? 99) < 10;
            // 押下が無名でも、離鍵が本物なら区間は再構成できる。合成かどうかを言う前にこちらを見る。
            const recOk =
                rec.pairs.length >= Math.max(1, Math.floor(insertedText.length * 0.8)) &&
                (HechimaProbePlugin.median(recHold) ?? 0) >= 30;
            lines.push(`物理キー不可  ${anonymous} 件が無名（code 空 / Unidentified）`);
            if (identified.length) {
                lines.push(`              識別できた ${identified.length} 件は修飾キーや、`);
                lines.push("              印字にならない組み合わせ（Alt+/Ctrl+）の可能性が高い");
            }
            lines.push("              印字キーが OS の入力方式フレームワークに食われている");
            if (recOk) {
                lines.push("");
                lines.push(`L3 相当（要再構成）  押下は無名だが **離鍵は本物**（code 付き）。`);
                lines.push(`              ${rec.pairs.length}/${insertedText.length} 件の押下区間を復元でき、`);
                lines.push(`              保持時間の中央値は ${HechimaProbePlugin.median(recHold)}ms（人間の打鍵の範囲）`);
                if (rec.nested > 0) {
                    lines.push(`              入れ子も ${rec.nested} 回観測 = 保持中に別のキーを打った事実が残る`);
                    lines.push("              → 相互シフト（薙刀式）・同時打鍵（新下駄）も組める見込み。");
                    lines.push("                ただし配線は素直ではない: キーの同定が**離鍵まで確定しない**ので、");
                    lines.push("                押下時は beforeinput の文字で代用し、文字→物理キーの対応を仮定する");
                } else {
                    lines.push("              入れ子は未観測 — 押したまま別のキーを打って測り直すこと");
                }
            } else if (synthetic) {
                lines.push("");
                lines.push(
                    `保持時間なし  無名キーの押下時間の中央値が ${HechimaProbePlugin.median(anonHold)}ms`
                );
                lines.push("              = 実際の押下ではなく確定時点の合成イベント。");
                lines.push("              識別できる離鍵も来ないので区間を再構成できない。");
                lines.push("              ホールドを意味に使う方式（薙刀式の相互シフト・新下駄・SandS）は");
                lines.push("              近似ではなく**原理的に**組めない（情報が入力に無い）");
            }
            lines.push("");
            if (insertedText.length && cancelableInputs.length === inputs.length && docDelta === 0) {
                lines.push("L1 可         beforeinput が全件 cancelable で、抑止も効いている");
                lines.push("              → 逐次系（ローマ字・AZIK・月配列の前置シフト）なら載る");
                lines.push("              文字列として横取りする経路になり、物理キーは見えない");
            } else if (insertedText.length) {
                lines.push("L1 も怪しい   beforeinput に文字は乗るが、抑止しきれていない");
            } else {
                lines.push("不可          beforeinput にも文字が乗らない — 横取りの足場が無い");
            }
        } else if (!ups.length) {
            lines.push("L2    keydown は識別できるが keyup が来ない — 押下集合を作れない");
            lines.push("      → 逐次系（ローマ字・月配列・AZIK）のみ。薙刀式・新下駄は原理的に不可");
        } else {
            const hold = HechimaProbePlugin.median(namedHold);
            if (hold !== null && hold < 10) {
                // 識別できていても押下時間が無ければホールド方式は組めない
                lines.push("L2 相当  keydown / keyup は揃いキーも識別できるが、");
                lines.push(`         押下時間の中央値が ${hold}ms = 合成イベントの疑い`);
                lines.push("         → 逐次系のみ。ホールド方式（薙刀式・新下駄）は不可");
            } else if (overlap.nested === 0) {
                lines.push("L3?   識別も押下時間も本物だが、押下の重なりを観測していない");
                lines.push(`      （押下時間の中央値 ${hold}ms）`);
                lines.push("      → **あるキーを押したまま別のキーを打って測り直すこと**。");
                lines.push("        重なりが見えて初めて相互シフト・同時打鍵の可否が決まる");
            } else {
                lines.push("L3    識別・押下時間・押下の重なり がすべて成立");
                lines.push(`      （押下時間の中央値 ${hold}ms / 同時最大 ${overlap.maxHeld} キー）`);
                lines.push("      → 相互シフト（薙刀式）・同時打鍵（新下駄）まで載る");
            }
        }

        lines.push("");
        if (docDelta === 0) {
            lines.push("OK    preventDefault で文字入力を抑止できた（本文は無変化）");
        } else {
            lines.push(`FAIL  抑止できていない（本文が ${docDelta} 文字変化した）`);
            // キーで止まらなくても beforeinput で止まるなら、文字列レベル（L1）で横取りできる
            if (insertedText.length && cancelableInputs.length === inputs.length) {
                lines.push("      ただし beforeinput は全件 cancelable = 文字列としてなら横取りできる");
                lines.push("      → L1（逐次系のみ）で載せる道は残る");
            } else if (insertedText.length) {
                lines.push(`      beforeinput も ${inputs.length - cancelableInputs.length} 件が cancelable でない`);
            } else {
                lines.push("      beforeinput にも文字が乗っていない — 横取りの足場が無い");
            }
        }
        lines.push(
            composing.length === 0
                ? "OK    isComposing はどれも立っていない"
                : `WARN  isComposing が ${composing.length} 件立っている — ` +
                      "OS 側キーボードを英字（ABC）にして測り直すこと"
        );

        lines.push("");
        lines.push("== 生ログ ==");
        if (!this.keyLog.length) {
            lines.push("(空)");
        } else {
            for (const k of this.keyLog.slice(0, 200)) {
                const t = String(k.t).padStart(6);
                if (k.type === "input") {
                    lines.push(
                        `${t}ms  ✎  ${String(k.inputType || "?").padEnd(14)} ` +
                            `data=${JSON.stringify(k.data)} cancelable=${k.cancelable}` +
                            `${k.composing ? " composing" : ""}`
                    );
                } else {
                    lines.push(
                        `${t}ms  ${k.type === "down" ? "▼" : "△"}  ` +
                            `${(k.code || "?").padEnd(14)} key=${JSON.stringify(k.key)} ` +
                            `mods=${k.mods}${k.repeat ? " repeat" : ""}${k.composing ? " composing" : ""}`
                    );
                }
            }
            if (this.keyLog.length > 200) lines.push(`… 他 ${this.keyLog.length - 200} 件`);
        }
        return lines.join("\n");
    }

    async run() {
        const notice = new Notice("hechima 偵察: 実行中…", 0);
        const r = new Report();
        try {
            await this.probe(r);
        } finally {
            notice.hide();
        }
        const verdict = r.failed ? "❌ 失敗" : "✅ 成功";
        new Notice(`hechima 偵察: ${verdict}`);
        new ReportModal(this.app, `hechima 偵察 — ${verdict}`, r.toText()).open();
    }

    async probe(r) {
        const adapter = this.app.vault.adapter;
        const dir = this.manifest.dir;
        
        // --- 環境 ---------------------------------------------------------
        r.lines.push("== 環境 ==");
        r.note(`Obsidian API ${apiVersion ?? "?"} / plugin ${this.manifest.version}`);
        r.note(
            `platform: mobile=${Platform.isMobile} ios=${Platform.isIosApp} ` +
                `android=${Platform.isAndroidApp} desktop=${Platform.isDesktopApp}`
        );
        r.note(`WebAssembly=${typeof WebAssembly} SharedArrayBuffer=${typeof SharedArrayBuffer}`);
        r.note(`crossOriginIsolated=${globalThis.crossOriginIsolated}`);
        r.note(`plugin dir: ${dir}`);
        r.note(`TZ: ${fixedOffsetTzName()}`);
        if (performance.memory) {
            r.note(`JS heap: ${mb(performance.memory.usedJSHeapSize)} 使用中`);
        }
        r.lines.push("");

        if (this.engine.mod) {
            r.lines.push("== 初期化 ==");
            r.lines.push("SKIP  初期化済み（測り直すなら「エンジンを破棄」コマンド）");
            r.lines.push("");
        } else {
            r.lines.push("== 初期化 ==");
            // **本番と同じ起動経路を測る**。偵察でだけ通る道を作らないため、
            // engine.boot に計測用の step を渡す形にしてある。
            await this.engine.boot((name, fn) => r.step(name, () => fn((t) => r.note(t))));
            if (r.failed) return;
            r.note("URL 解決なしで起動（vault から読んだバイト列のみ）");
            r.note(`wasm ヒープ: ${mb(this.engine.mod.HEAPU8.length)}`);
            for (const line of this.engine.stderr) r.note(`stderr: ${line}`);
            r.lines.push("");
        }

        // --- 変換 ---------------------------------------------------------
        const mod = this.engine.mod;
        r.lines.push("== 変換 ==");

        const rawConvert = (yomi, maxCands) => {
            const json = mod.ccall(
                "hechima_convert",
                "string",
                ["string", "number"],
                [yomi, maxCands]
            );
            const parsed = JSON.parse(String(json));
            if (!parsed?.segments?.length) throw new Error(`空の結果: ${json}`);
            return parsed;
        };

        const convert = (yomi, label) =>
            r.step(`${label}「${yomi}」`, async () => {
                const parsed = rawConvert(yomi, 9);
                for (const s of parsed.segments) {
                    r.note(`${s.key} → ${s.candidates.slice(0, 3).join(" / ")}`);
                }
                return parsed;
            });

        await convert(SAMPLE_YOMI, "変換");
        // 2 回目は辞書ロード済みの定常速度。初回との差が「暖機」の実測値になる
        await convert(SAMPLE_YOMI, "同じ読みを再変換");

        // TZ 検証 — 見た目の成否では分からない種類の壊れ方を測る。
        // wasm には zoneinfo が無いので TZ 未設定だと cctz が UTC に落ち、
        // 「いま」の時刻候補が 9 時間ずれる（変換自体は成功したまま静かに間違う）。
        // 端末のローカル時刻と突き合わせて初めて検出できる。
        await r.step("TZ 検証（「いま」の時刻候補が端末時刻と一致するか）", async () => {
            const cands = rawConvert("いま", 20).segments[0].candidates;
            const hit = cands.find((c) => /^\d{1,2}:\d{2}$/.test(c));
            if (!hit) {
                throw new Error(`時刻候補が出ない: ${cands.slice(0, 8).join(" / ")}`);
            }
            const now = new Date();
            const expected = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
            r.note(`候補 ${hit} / 端末 ${expected}`);
            if (hit !== expected) {
                // 分をまたいだだけの 1 分差は許す。それ以外はゾーンがずれている
                const [hh, mm] = hit.split(":").map(Number);
                const diffMin = Math.abs(hh * 60 + mm - (now.getHours() * 60 + now.getMinutes()));
                if (diffMin > 1) {
                    throw new Error(
                        `時刻が ${diffMin} 分ずれている — preRun での ENV.TZ が効いていない`
                    );
                }
            }
        });

        r.lines.push("");
        r.lines.push("== 総評 ==");
        r.note(
            r.failed
                ? "どこかで落ちた。FAIL 行の直後のスタックが原因の場所"
                : "Obsidian 上で hechima の変換エンジンが動作した"
        );
        if (!r.failed && performance.memory) {
            r.note(`JS heap: ${mb(performance.memory.usedJSHeapSize)} 使用中（実行後）`);
        }
        if (this.engine.suppressed) {
            r.note(`mozc の既知の初期化警告 ${this.engine.suppressed} 行を伏せた（素のプロファイルでは正常）`);
        }
    }
};

class HechimaSettingTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();

        new Setting(containerEl)
            .setName("配列")
            .setDesc("打鍵をかなに変換する規則。同梱分から選ぶ（vault の配列は Phase 2.5）")
            .addDropdown((d) => {
                for (const k of this.plugin.ime.catalog()) {
                    d.addOption(k.id, `${k.name}（${k.behavior === "chord" ? "同時打鍵" : "逐次"}・${k.origin}）`);
                }
                d.setValue(this.plugin.settings.keymapId);
                d.onChange(async (id) => {
                    this.plugin.settings.keymapId = id;
                    await this.plugin.saveSettings();
                    try {
                        this.plugin.ime.setKeymap(id);
                    } catch (e) {
                        new Notice(`配列を切り替えられない: ${String(e?.message ?? e)}`);
                    }
                });
            });

        // vault 側の配列（Phase 2.5）
        new Setting(containerEl)
            .setName("vault の配列")
            .setDesc(
                `${VAULT_KEYMAP_DIR}/*.json を置くと一覧に加わります。` +
                    "同じ id なら同梱より vault が優先され、保存した瞬間に反映されます。"
            );
        const vaultCount = this.plugin.ime.vaultKeymaps.size;
        containerEl.createEl("p", {
            text: vaultCount ? `読み込み済み: ${vaultCount} 件` : "まだ置かれていません",
        });
        for (const err of this.plugin.ime.keymapErrors) {
            const p = containerEl.createEl("p", { text: `読めません — ${err}` });
            p.style.color = "var(--text-error)";
        }

        new Setting(containerEl)
            .setName("学習をリセット")
            .setDesc("変換の学習（候補の並び・文節区切り）を消します。ユーザー辞書は消えません")
            .addButton((b) => {
                b.setButtonText("リセット");
                b.onClick(async () => {
                    const wasActive = this.plugin.ime.active;
                    this.plugin.ime.dispose();
                    await this.plugin.engine.clearLearning();
                    if (wasActive) await this.plugin.ime.setActive(true);
                    new Notice("hechima: 学習をリセットしました");
                });
            });

        new Setting(containerEl)
            .setName("日本語入力")
            .setDesc("コマンド「日本語入力の ON / OFF」にホットキーを割り当てると切り替えやすい")
            .addToggle((t) => {
                t.setValue(this.plugin.ime.active);
                t.onChange((on) => void this.plugin.ime.setActive(on));
            });
    }
}

// 結合された vendor を 1 か所から引けるようにする。実機のコマンドと node ハーネスが
// 同じものを見るための口で、Phase 0 の完了条件（3 本が名前で引ける）を機械的に確かめられる。
module.exports.__vendor = {
    HechimaModule: typeof HechimaModule === "function" ? HechimaModule : undefined,
    KeymapEngine: typeof KeymapEngine === "undefined" ? undefined : KeymapEngine,
    Hechima: typeof Hechima === "undefined" ? undefined : Hechima,
};
