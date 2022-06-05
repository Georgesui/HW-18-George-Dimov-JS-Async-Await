function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, ms);
	});
}

async function getUserInfo() {
	await delay(1000);
	return ({
		name: 'Vic',
		age: 21,
		id: 1
	});
};

async function getUserAvatar(userInfo) {
	await delay(1000);
	userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
	return userInfo;
}

async function getUserAdditionalInfo(userInfo) {
	await delay(1000);
	userInfo.interests = ['sport', 'books'];
	return userInfo;
}

async function getResult() {
	let userInfo = await getUserInfo();
	let userInfoWithAvatar = await getUserAvatar(userInfo);
	let userinfoWithInterests = await getUserAdditionalInfo(userInfoWithAvatar)

	console.log(userinfoWithInterests)
}

getResult()


async function getUser() {
	return {
		name: 'Vic',
		age: 21,
		id: 1
	};
}

async function getInfo() {
	try {
		let user = await getUser();
		throw new Error('error');
	} catch (error) {
		console.log(error)
	}
}

getInfo();