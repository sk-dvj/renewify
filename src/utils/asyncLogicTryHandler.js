const asyncLogicTryHandler = (logicfn)=>{async(error,req,res,next)=>{
	try{
		await logicfn(error,rreq,res,next)
	}
	catch(err){
		res.status(err.code || 404).json({
			success : false,
			message : err.code
		})
	}
}
}

export default asyncLogicTryHandler;
