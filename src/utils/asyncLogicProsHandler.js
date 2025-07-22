const asyncLogicProsHandler = (logicfn)=>{ 
	return		(req,res,next)=>{
	 Promise
		.resolve(logicfn(req,res,next))
		.catch((err)=>{next(err)})
}
}


export {asyncLogicProsHandler};