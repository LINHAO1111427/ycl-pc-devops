import Mock from 'mockjs';

// 模拟 GET 请求


// 创建一个 Set 用于存储生成过的验证码
const generatedCodes = new Set();

// 模拟一个 6 位数验证码的请求
Mock.mock('/api/sendCode', 'get', function() {
    let captcha;

    // 确保验证码不重复
    do {
        captcha = Mock.Random.integer(100000, 999999); // 生成6位数随机验证码
    } while (generatedCodes.has(captcha));  // 如果生成过这个验证码，继续生成新验证码

    // 将生成的验证码存入 Set 中
    generatedCodes.add(captcha);

    return {
        code: 200,
        message: '验证码生成成功',
        data: {
            captcha: captcha
        }
    };
});

Mock.mock('/api/user', 'get', function(options) {
    return {
        code: 200,
        message: '请求成功',
        data: {
            id: Mock.Random.guid(),
            name: Mock.Random.name(),
            age: Mock.Random.integer(18, 40), // 生成18到40之间的随机整数
            email: Mock.Random.email()
        }
    };
});

Mock.mock('/api/postData', 'post', (options) => {
    const requestData = JSON.parse(options.body);
    return {
        code: 200,
        message: '数据提交成功',
        data: requestData
    };
});
// 模拟 POST 请求
Mock.mock('/api/postData', 'post', (options) => {
    const requestData = JSON.parse(options.body);
    return {
        code: 200,
        message: '数据提交成功',
        data: requestData
    };
});

// 你还可以模拟更多的接口...
