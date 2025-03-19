/**
 * 音乐App交互逻辑
 */

// 当文档加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次
    
    // 设置底部导航栏点击事件
    setupTabBarNavigation();
    
    // 初始化播放控制
    initializePlayControls();
    
    // 为搜索框添加事件监听
    setupSearchFunctionality();
});

/**
 * 更新状态栏时间
 */
function updateStatusBarTime() {
    const timeElement = document.querySelector('.status-bar-time');
    if (timeElement) {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        // 格式化时间为两位数
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

/**
 * 设置底部导航栏点击事件
 */
function setupTabBarNavigation() {
    const tabItems = document.querySelectorAll('.tab-bar-item');
    
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            tabItems.forEach(tab => tab.classList.remove('active'));
            
            // 为当前点击项添加active类
            this.classList.add('active');
            
            // 实际应用中这里会切换到对应页面
            console.log(`导航到: ${this.getAttribute('data-tab')}`);
        });
    });
}

/**
 * 初始化播放控制
 */
function initializePlayControls() {
    // 播放/暂停按钮
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isPlaying = this.classList.contains('playing');
            
            if (isPlaying) {
                // 暂停逻辑
                this.classList.remove('playing');
                this.innerHTML = '<i class="fas fa-play"></i>';
                pauseAudio();
            } else {
                // 播放逻辑
                this.classList.add('playing');
                this.innerHTML = '<i class="fas fa-pause"></i>';
                playAudio();
            }
        });
    });
    
    // 上一首/下一首按钮
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            console.log('播放上一首');
            // 播放上一首歌曲的逻辑
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            console.log('播放下一首');
            // 播放下一首歌曲的逻辑
        });
    }
    
    // 迷你播放器点击
    const miniPlayer = document.querySelector('.mini-player');
    if (miniPlayer) {
        miniPlayer.addEventListener('click', function() {
            // 打开全屏播放器
            window.location.href = 'player.html';
        });
    }
}

/**
 * 播放音频
 */
function playAudio() {
    console.log('开始播放音频');
    // 实际应用中这里会调用音频API播放音乐
}

/**
 * 暂停音频
 */
function pauseAudio() {
    console.log('暂停音频');
    // 实际应用中这里会调用音频API暂停音乐
}

/**
 * 设置搜索功能
 */
function setupSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            
            if (query.length > 0) {
                // 显示搜索结果
                searchResults.style.display = 'block';
                
                // 这里会根据输入内容更新搜索结果
                // 实际应用中会调用API获取搜索结果
                console.log(`搜索: ${query}`);
            } else {
                // 隐藏搜索结果
                searchResults.style.display = 'none';
            }
        });
    }
}

/**
 * 切换喜欢/收藏状态
 */
function toggleLike(element) {
    element.classList.toggle('text-red-500');
    console.log('切换收藏状态');
}

/**
 * 显示分享选项
 */
function showShareOptions() {
    console.log('显示分享选项');
    // 实际应用中会显示分享弹窗
    alert('分享功能');
}

/**
 * 调整进度条
 */
function updateProgress(element, value) {
    const progressBar = element.querySelector('.progress-filled');
    if (progressBar) {
        progressBar.style.width = `${value}%`;
    }
}