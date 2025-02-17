<script setup lang="ts">
	import { ref } from 'vue'

	const options = [
		{
			title: '写作与翻译',
		},
		{
			title: '财务与会计',
		},
		{
			title: '工程与建筑',
		},
		{
			title: '法律',
		},
		{
			title: '人力资源与培训',
		}
	]

	const current = ref('写作与翻译')
</script>

<template>
	<div class="header-talents">
		<div class="header-talents-slider">
			<n-flex :class="{
          'talents-slider': true,
          active: current === item.title,
        }" vertical justify="center" v-for="item in options" @click="current = item.title">
				<div class="slider-text">{{ item.title }}</div>
			</n-flex>

		</div>

		<div class="header-talents-right">
			<template v-if="current === '写作与翻译'">
				<n-flex style="gap: 0 200px;">
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								学术写作
							</div>
							<div class="desc secondary-color-text-1">
								散文作家
							</div>
							<div class="desc secondary-color-text-1">
								学术写作专家
							</div>
							<div class="desc secondary-color-text-1">
								教学设计师
							</div>
							<div class="desc secondary-color-text-1">
								课程专业人员
							</div>
							<div class="desc secondary-color-text-1">
								课程开发人员
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								内容写作
							</div>
							<div class="desc secondary-color-text-1">
								传记作家
							</div>
							<div class="desc secondary-color-text-1">
								书评人
							</div>
							<div class="desc secondary-color-text-1">
								简历作者
							</div>
							<div class="desc secondary-color-text-1">
								职位描述作家
							</div>
							<div class="desc secondary-color-text-1">
								求职信作家
							</div>
							<div class="desc secondary-color-text-1">
								作者
							</div>
							<div class="desc secondary-color-text-1">
								商业计划作家
							</div>
							<div class="desc secondary-color-text-1">
								市场研究分析师
							</div>
							<div class="desc secondary-color-text-1">
								医学作家
							</div>
							<div class="desc secondary-color-text-1">
								法律作家
							</div>
							<div class="desc secondary-color-text-1">
								研究人员
							</div>
							<div class="desc secondary-color-text-1">
								研究专家
							</div>
							<div class="desc secondary-color-text-1">
								时尚作家
							</div>
							<div class="desc secondary-color-text-1">
								信件作家
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								创意写作
							</div>
							<div class="desc secondary-color-text-1">
								图书作家
							</div>
							<div class="desc secondary-color-text-1">
								小说作家
							</div>
							<div class="desc secondary-color-text-1">
								短篇小说作家
							</div>
							<div class="desc secondary-color-text-1">
								Kindle直接出版专业人士
							</div>
							<div class="desc secondary-color-text-1">
								创意作家
							</div>
							<div class="desc secondary-color-text-1">
								喜剧作家
							</div>
							<div class="desc secondary-color-text-1">
								编剧
							</div>
							<div class="desc secondary-color-text-1">
								播客制作人
							</div>
							<div class="desc secondary-color-text-1">
								编剧专业人士
							</div>
							<div class="desc secondary-color-text-1">
								演讲作家
							</div>
							<div class="desc secondary-color-text-1">
								故事板艺术家
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								编辑和校对
							</div>
							<div class="desc secondary-color-text-1">
								图书编辑
							</div>
							<div class="desc secondary-color-text-1">
								編輯
							</div>
							<div class="desc secondary-color-text-1">
								校对员
							</div>
							<div class="desc secondary-color-text-1">
								文案编辑
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								其他
							</div>
							<div class="desc secondary-color-text-1">
								维基百科专家
							</div>
							<div class="desc secondary-color-text-1">
								文章作者
							</div>
							<div class="desc secondary-color-text-1">
								记者
							</div>
							<div class="desc secondary-color-text-1">
								资助作者
							</div>
							<div class="desc secondary-color-text-1">
								提案作家
							</div>
							<div class="desc secondary-color-text-1">
								商业提案作家
							</div>
							<div class="desc secondary-color-text-1">
								评论作家
							</div>
							<div class="desc secondary-color-text-1">
								誊写員
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								技术写作
							</div>
							<div class="desc secondary-color-text-1">
								LinkedIn 专家
							</div>
							<div class="desc secondary-color-text-1">
								研究论文作者
							</div>
							<div class="desc secondary-color-text-1">
								技术作家
							</div>
							<div class="desc secondary-color-text-1">
								白皮书作者
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								翻译
							</div>
							<div class="desc secondary-color-text-1">
								翻译人员
							</div>
							<div class="desc secondary-color-text-1">
								西班牙语翻译
							</div>
							<div class="desc secondary-color-text-1">
								中文翻译
							</div>
							<div class="desc secondary-color-text-1">
								意大利语翻译
							</div>
							<div class="desc secondary-color-text-1">
								法语翻译
							</div>
							<div class="desc secondary-color-text-1">
								德语翻译
							</div>
							<div class="desc secondary-color-text-1">
								阿拉伯语翻译
							</div>
							<div class="desc secondary-color-text-1">
								葡萄牙语翻译
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								网络文案写作
							</div>
							<div class="desc secondary-color-text-1">
								博客作家
							</div>
							<div class="desc secondary-color-text-1">
								文案撰稿人
							</div>
							<div class="desc secondary-color-text-1">
								头条作家
							</div>
							<div class="desc secondary-color-text-1">
								电子书作者
							</div>
							<div class="desc secondary-color-text-1">
								内容作家
							</div>
							<div class="desc secondary-color-text-1">
								SEO作家
							</div>
							<div class="desc secondary-color-text-1">
								社交媒体内容专业人士
							</div>
							<div class="desc secondary-color-text-1">
								在线作家
							</div>
							<div class="desc secondary-color-text-1">
								新闻稿作家
							</div>
							<div class="desc secondary-color-text-1">
								产品描述作家
							</div>
						</n-flex>
					</n-flex>
				</n-flex>
			</template>
			<template v-else-if="current === '财务与会计'">
				<n-flex style="gap: 0 200px;">
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								会计
							</div>
							<div class="desc secondary-color-text-1">
								会计师
							</div>
							<div class="desc secondary-color-text-1">
								簿记员
							</div>
							<div class="desc secondary-color-text-1">
								QuickBooks 顾问
							</div>
							<div class="desc secondary-color-text-1">
								注册会计师
							</div>
							<div class="desc secondary-color-text-1">
								税务准备人员
							</div>
							<div class="desc secondary-color-text-1">
								Xero 专家
							</div>
							<div class="desc secondary-color-text-1">
								薪资处理专家
							</div>
							<div class="desc secondary-color-text-1">
								财务会计师
							</div>
							<div class="desc secondary-color-text-1">
								Sage 50 会计专家
							</div>
							<div class="desc secondary-color-text-1">
								应收账款经理
							</div>
							<div class="desc secondary-color-text-1">
								Wave 会计专家
							</div>
							<div class="desc secondary-color-text-1">
								应付账款经理
							</div>
							<div class="desc secondary-color-text-1">
								Intuit TurboTax 专家
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								企业管理
							</div>
							<div class="desc secondary-color-text-1">
								Excel 专家
							</div>
							<div class="desc secondary-color-text-1">
								项目经理
							</div>
							<div class="desc secondary-color-text-1">
								市场研究分析师
							</div>
							<div class="desc secondary-color-text-1">
								商业顾问
							</div>
							<div class="desc secondary-color-text-1">
								业务分析师
							</div>
							<div class="desc secondary-color-text-1">
								业务发展专家
							</div>
							<div class="desc secondary-color-text-1">
								合同法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								电子表格专家
							</div>
							<div class="desc secondary-color-text-1">
								电子商务专家
							</div>
							<div class="desc secondary-color-text-1">
								创业顾问
							</div>
							<div class="desc secondary-color-text-1">
								管理顾问
							</div>
							<div class="desc secondary-color-text-1">
								业务经理
							</div>
							<div class="desc secondary-color-text-1">
								供应链管理顾问
							</div>
							<div class="desc secondary-color-text-1">
								经济专家
							</div>
							<div class="desc secondary-color-text-1">
								运营经理
							</div>
							<div class="desc secondary-color-text-1">
								顾问
							</div>
							<div class="desc secondary-color-text-1">
								商业智能开发人员
							</div>
							<div class="desc secondary-color-text-1">
								性能测试专家
							</div>
							<div class="desc secondary-color-text-1">
								合同经理
							</div>
							<div class="desc secondary-color-text-1">
								商业估价专家
							</div>
							<div class="desc secondary-color-text-1">
								企业战略专家
							</div>
							<div class="desc secondary-color-text-1">
								商业规划师
							</div>
							<div class="desc secondary-color-text-1">
								项目经理
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								金融
							</div>
							<div class="desc secondary-color-text-1">
								加密货币专业人士
							</div>
							<div class="desc secondary-color-text-1">
								外汇交易员
							</div>
							<div class="desc secondary-color-text-1">
								财务分析师
							</div>
							<div class="desc secondary-color-text-1">
								财务规划师
							</div>
							<div class="desc secondary-color-text-1">
								金融建模师
							</div>
							<div class="desc secondary-color-text-1">
								投资银行家
							</div>
							<div class="desc secondary-color-text-1">
								风险管理专家
							</div>
							<div class="desc secondary-color-text-1">
								财务经理
							</div>
							<div class="desc secondary-color-text-1">
								文件控制专家
							</div>
							<div class="desc secondary-color-text-1">
								投资经理
							</div>
							<div class="desc secondary-color-text-1">
								Oracle 财务应用专家
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								其他
							</div>
							<div class="desc secondary-color-text-1">
								众筹专家
							</div>
							<div class="desc secondary-color-text-1">
								筹款顾问
							</div>
							<div class="desc secondary-color-text-1">
								风险投资顾问
							</div>
						</n-flex>
					</n-flex>
				</n-flex>
			</template>
			<template v-else-if="current === '工程与建筑'">
				<n-flex style="gap: 0 200px;">
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								建筑学
							</div>
							<div class="desc secondary-color-text-1">
								建筑师
							</div>
							<div class="desc secondary-color-text-1">
								结构工程师
							</div>
							<div class="desc secondary-color-text-1">
								室内设计师
							</div>
							<div class="desc secondary-color-text-1">
								景观设计师
							</div>
							<div class="desc secondary-color-text-1">
								平面图设计师
							</div>
							<div class="desc secondary-color-text-1">
								KitchenDraw 专家
							</div>
							<div class="desc secondary-color-text-1">
								BIM 专家
							</div>
							<div class="desc secondary-color-text-1">
								建筑渲染专家
							</div>
							<div class="desc secondary-color-text-1">
								焊工
							</div>
							<div class="desc secondary-color-text-1">
								酒店专家
							</div>
							<div class="desc secondary-color-text-1">
								照明设计师
							</div>
							<div class="desc secondary-color-text-1">
								城市规划专业人士
							</div>
							<div class="desc secondary-color-text-1">
								建筑顾问
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								CAD/技术图纸
							</div>
							<div class="desc secondary-color-text-1">
								AutoCAD 绘图员
							</div>
							<div class="desc secondary-color-text-1">
								3D 建模师
							</div>
							<div class="desc secondary-color-text-1">
								3D 艺术家
							</div>
							<div class="desc secondary-color-text-1">
								CAD 设计师
							</div>
							<div class="desc secondary-color-text-1">
								3D 设计师
							</div>
							<div class="desc secondary-color-text-1">
								产品设计师
							</div>
							<div class="desc secondary-color-text-1">
								SketchUp 专家
							</div>
							<div class="desc secondary-color-text-1">
								SolidWorks 设计师
							</div>
							<div class="desc secondary-color-text-1">
								3D 渲染艺术家
							</div>
							<div class="desc secondary-color-text-1">
								Autodesk Revit 专家
							</div>
							<div class="desc secondary-color-text-1">
								起草专家
							</div>
							<div class="desc secondary-color-text-1">
								增强现实开发人员
							</div>
							<div class="desc secondary-color-text-1">
								3D打印专家
							</div>
							<div class="desc secondary-color-text-1">
								3ds Max 专家
							</div>
							<div class="desc secondary-color-text-1">
								Autodesk Fusion 360 专业人士
							</div>
							<div class="desc secondary-color-text-1">
								注塑模具设计专业人员
							</div>
							<div class="desc secondary-color-text-1">
								产品开发人员
							</div>
							<div class="desc secondary-color-text-1">
								CATIA 专家
							</div>
							<div class="desc secondary-color-text-1">
								ArchiCAD 设计师
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								工程
							</div>
							<div class="desc secondary-color-text-1">
								土木工程师
							</div>
							<div class="desc secondary-color-text-1">
								机械工程师
							</div>
							<div class="desc secondary-color-text-1">
								电气工程师
							</div>
							<div class="desc secondary-color-text-1">
								PCB 设计师
							</div>
							<div class="desc secondary-color-text-1">
								CNC 程序员
							</div>
							<div class="desc secondary-color-text-1">
								软件工程师
							</div>
							<div class="desc secondary-color-text-1">
								Arduino 程序员
							</div>
							<div class="desc secondary-color-text-1">
								化学工程师
							</div>
							<div class="desc secondary-color-text-1">
								工业设计师
							</div>
							<div class="desc secondary-color-text-1">
								地理信息系统（GIS 开发人员
							</div>
							<div class="desc secondary-color-text-1">
								机器人工程师
							</div>
							<div class="desc secondary-color-text-1">
								计算流体力学（CFD专家
							</div>
							<div class="desc secondary-color-text-1">
								汽车工程师
							</div>
							<div class="desc secondary-color-text-1">
								工程制图专家
							</div>
							<div class="desc secondary-color-text-1">
								工程顾问
							</div>
							<div class="desc secondary-color-text-1">
								航空工程师
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								其他
							</div>
							<div class="desc secondary-color-text-1">
								Excel 专家
							</div>
							<div class="desc secondary-color-text-1">
								化学家
							</div>
							<div class="desc secondary-color-text-1">
								机器学习工程师
							</div>
							<div class="desc secondary-color-text-1">
								估算器
							</div>
							<div class="desc secondary-color-text-1">
								Google Analytics 专家
							</div>
							<div class="desc secondary-color-text-1">
								数学家
							</div>
							<div class="desc secondary-color-text-1">
								制药行业专家
							</div>
							<div class="desc secondary-color-text-1">
								统计分析师
							</div>
							<div class="desc secondary-color-text-1">
								MATLAB 开发人员
							</div>
							<div class="desc secondary-color-text-1">
								地质学家
							</div>
							<div class="desc secondary-color-text-1">
								生物学家
							</div>
							<div class="desc secondary-color-text-1">
								算法开发者
							</div>
							<div class="desc secondary-color-text-1">
								素描作业
							</div>
							<div class="desc secondary-color-text-1">
								合同管理职位
							</div>
							<div class="desc secondary-color-text-1">
								合同制造职位
							</div>
							<div class="desc secondary-color-text-1">
								物流经理职位
							</div>
							<div class="desc secondary-color-text-1">
								数学导师职位
							</div>
						</n-flex>
					</n-flex>
				</n-flex>
			</template>
			<template v-else-if="current === '法律'">
				<n-flex style="gap: 0 200px;">
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								商业和公司法
							</div>
							<div class="desc secondary-color-text-1">
								合同法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								合约经理
							</div>
							<div class="desc secondary-color-text-1">
								合同起草人
							</div>
							<div class="desc secondary-color-text-1">
								合作协议 专业人士
							</div>
							<div class="desc secondary-color-text-1">
								劳动法专业人士
							</div>
							<div class="desc secondary-color-text-1">
								企业法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								监管合规专业人员
							</div>
							<div class="desc secondary-color-text-1">
								就业法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								贸易法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								商业法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								品牌授权专家
							</div>
							<div class="desc secondary-color-text-1">
								税务顾问
							</div>
							<div class="desc secondary-color-text-1">
								信托遗产和遗嘱专家
							</div>
							<div class="desc secondary-color-text-1">
								税务策略专家
							</div>
							<div class="desc secondary-color-text-1">
								破产专家
							</div>
							<div class="desc secondary-color-text-1">
								消费者保护专家
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								总法律顾问
							</div>
							<div class="desc secondary-color-text-1">
								HIPAA 专家
							</div>
							<div class="desc secondary-color-text-1">
								医疗法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								移民法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								民事法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								房地产法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								家庭法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								环境法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								国际法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								刑事法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								诉讼专家
							</div>
						</n-flex>
						<n-flex vertical>
							<div class="header-talents-title">
								知识产权法
							</div>
							<div class="desc secondary-color-text-1">
								商标顾问
							</div>
							<div class="desc secondary-color-text-1">
								专利法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								专利检索专业人员
							</div>
							<div class="desc secondary-color-text-1">
								知识产权法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								版权法律专业人士
							</div>
							<div class="desc secondary-color-text-1">
								授权专家
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								法律援助
							</div>
							<div class="desc secondary-color-text-1">
								律师助理专业人士
							</div>
							<div class="desc secondary-color-text-1">
								法律作家
							</div>
							<div class="desc secondary-color-text-1">
								法律顾问
							</div>
							<div class="desc secondary-color-text-1">
								法律助理
							</div>
							<div class="desc secondary-color-text-1">
								公证专家
							</div>
							<div class="desc secondary-color-text-1">
								法律翻译
							</div>
							<div class="desc secondary-color-text-1">
								法律转录员
							</div>
							<div class="desc secondary-color-text-1">
								法律研究人员
							</div>
							<div class="desc secondary-color-text-1">
								证词摘要 专业人员
							</div>
							<div class="desc secondary-color-text-1">
								仲裁律师和法律专业人士
							</div>
						</n-flex>
					</n-flex>
				</n-flex>
			</template>
			<template v-else-if="current === '人力资源与培训'">
				<n-flex style="gap: 0 200px;">
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								商业与金融
							</div>
							<div class="desc secondary-color-text-1">
								职业顾问
							</div>
							<div class="desc secondary-color-text-1">
								高管教练
							</div>
							<div class="desc secondary-color-text-1">
								培训与发展专业人员
							</div>
							<div class="desc secondary-color-text-1">
								励志演说家
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">
						<n-flex vertical>
							<div class="header-talents-title">
								人力资源与招聘
							</div>
							<div class="desc secondary-color-text-1">
								职位描述撰写者
							</div>
							<div class="desc secondary-color-text-1">
								人力资源顾问
							</div>
							<div class="desc secondary-color-text-1">
								招聘人员
							</div>
							<div class="desc secondary-color-text-1">
								人力资源经理
							</div>
							<div class="desc secondary-color-text-1">
								采访者
							</div>
							<div class="desc secondary-color-text-1">
								技术招聘人员
							</div>
							<div class="desc secondary-color-text-1">
								SAP SuccessFactors 自由职业者
							</div>
							<div class="desc secondary-color-text-1">
								在线自由职业者
							</div>
							<div class="desc secondary-color-text-1">
								能力评估自由职业者
							</div>
							<div class="desc secondary-color-text-1">
								薪酬调查专家
							</div>
							<div class="desc secondary-color-text-1">
								QHSE专家
							</div>
							<div class="desc secondary-color-text-1">
								可教专家
							</div>
							<div class="desc secondary-color-text-1">
								LinkedIn 招聘人员
							</div>
							<div class="desc secondary-color-text-1">
								薪酬顾问
							</div>
							<div class="desc secondary-color-text-1">
								人力资源政策专家
							</div>
							<div class="desc secondary-color-text-1">
								入职专家
							</div>
							<div class="desc secondary-color-text-1">
								布尔搜索专家
							</div>
							<div class="desc secondary-color-text-1">
								领导力发展专家
							</div>
							<div class="desc secondary-color-text-1">
								人力资源信息系统专家
							</div>
							<div class="desc secondary-color-text-1">
								员工敬业度专家
							</div>
							<div class="desc secondary-color-text-1">
								ISO 9000 专家
							</div>
							<div class="desc secondary-color-text-1">
								表达专家
							</div>
							<div class="desc secondary-color-text-1">
								工作日专家
							</div>
							<div class="desc secondary-color-text-1">
								工作场所安全与健康专业人员
							</div>
						</n-flex>
					</n-flex>
					<n-flex vertical style="gap: 40px 0;">

						<n-flex vertical>
							<div class="header-talents-title">
								训练
							</div>
							<div class="desc secondary-color-text-1">
								教学设计师
							</div>
							<div class="desc secondary-color-text-1">
								课程开发者
							</div>
							<div class="desc secondary-color-text-1">
								清晰的故事情节专家
							</div>
							<div class="desc secondary-color-text-1">
								教育顾问
							</div>
							<div class="desc secondary-color-text-1">
								电子学习专家
							</div>
							<div class="desc secondary-color-text-1">
								LearnDash 专家
							</div>
							<div class="desc secondary-color-text-1">
								学习管理系统（LMS 专家
							</div>
							<div class="desc secondary-color-text-1">
								思科认证网络工程师 (CCNA)
							</div>
							<div class="desc secondary-color-text-1">
								员工培训专家
							</div>
							<div class="desc secondary-color-text-1">
								Adobe Captivate 专家
							</div>
							<div class="desc secondary-color-text-1">
								SCORM 专家
							</div>
							<div class="desc secondary-color-text-1">
								计算机技能专家
							</div>
							<div class="desc secondary-color-text-1">
								清晰崛起的专业人士
							</div>
							<div class="desc secondary-color-text-1">
								Lectora 专家
							</div>
						</n-flex>
					</n-flex>
				</n-flex>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header-talents {
		width: 1326px;
		margin: 0 auto;
		padding: 40px 0;
		display: flex;
		max-width: 100%;

		.header-talents-slider {
			padding-right: 100px;
			padding-left: 100px;
			box-sizing: border-box;
			display: inline-flex;
			flex-direction: column;
			gap: 14px;
			border-right: solid 1px #ededed;
			margin-right: 100px;
		}

		.header-talents-right {
			flex: 1;
			max-height:calc(100vh - 150px);
			overflow-y: scroll;
			scrollbar-width: none; 
		}
		.header-talents-right::-webkit-scrollbar {
		  display: none;
		}

		.talents-slider {
			cursor: pointer;
			color: #333333;

			.slider-text {
				color: #333333;
			}

			.desc {
				color: #808080;
			}
		}

		.header-talents-title {
			font-size: 14px;
			margin-bottom: 10px;
		}

		::v-deep(.n-button__content) {
			margin: 40px 0 68px 0;
			font-size: 12px;
		}

		.talents-image {
			width: 140px;
			height: 86px;
			border-radius: 10px;
			overflow: hidden;
		}

		.talents-text {
			font-weight: 500;
			font-size: 12px;
			color: #808080;
		}
	}
	@media (max-width: 1280px) {
		.header-talents {
			.header-talents-slider{
				padding-right: 65px;
				padding-left: 65px;
			}
		}
	}
</style>