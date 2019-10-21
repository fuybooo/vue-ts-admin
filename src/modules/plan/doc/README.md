## 产品开发说明书
### 接口设计
#### 1. 查询所有计划
##### 1. url: /plan/list
##### 2. params:
    1. keywords string N
##### 3. response
    1. code
    2. name
    3. status
        1. 1: 未开始
        2. 2: 进行中
        3. 3: 已完成
        4. 4: 已过期（未执行完成）
    4. startDate
    5. endDate
    6. detail
        ```
            [
                {
                    startTime: '09:00',
                    endTime: '10:00',
                    remark: '早餐过后吃药',
                },
                {
                    startTime: '19:00',
                    endTime: '20:00',
                    remark: '晚餐过后吃药',
                },
            ]
        ```
    7. remark
#### 2. 新增计划
##### 1. url: /plan/create
##### 2. params:
    1. code
    2. name
    3. status
        1. 新增时判断时间范围，若时间范围包含今天，则将状态设置为 2，否则为 1
    4. startDate
    5. endDate
    6. detail
        ```
            [
                {
                    startTime: '09:00',
                    endTime: '10:00',
                    remark: '早餐过后吃药',
                },
                {
                    startTime: '19:00',
                    endTime: '20:00',
                    remark: '晚餐过后吃药',
                },
            ]
        ```
    7. remark
#### 3. 生成计划条目
##### 1. url: /planItem/create
##### 2. params:
    1. planId
    2. status
        1. 1: 未开始
        2. 2: 进行中
        3. 3: 已完成
        4. 4: 已过期（未执行完成）
    3. date
    4. time
#### 4. 根据计划id查询所有计划条目
##### 1. url: /planItem/list
##### 2. params:
    1. planId
#### 5. 根据计划条目id删除
##### 1. url: /planItem/delete
##### 2. params:
    1. planItemId
#### 6. 查询所有的计划
##### 1. url: /planItem/listDetail
##### 2. params:
