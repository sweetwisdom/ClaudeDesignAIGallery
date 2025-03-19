// 合同APP - 基础交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次

    // 为所有底部标签添加点击事件
    setupTabBarNavigation();

    // 初始化交互效果
    initInteractions();
});

/**
 * 更新状态栏时间
 */
function updateStatusBarTime() {
    const timeElements = document.querySelectorAll('.ios-status-bar .time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    timeElements.forEach(element => {
        element.textContent = timeString;
    });
}

/**
 * 设置底部标签栏导航
 */
function setupTabBarNavigation() {
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // 如果在嵌套的iframe中，向父窗口发送消息
            if (window.parent !== window) {
                window.parent.postMessage({
                    action: 'navigate',
                    target: target
                }, '*');
            } else {
                // 如果是主窗口，直接处理导航
                handleNavigation(target);
            }
            
            // 更新活动标签样式
            tabItems.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 监听来自iframe的消息
    window.addEventListener('message', function(event) {
        if (event.data.action === 'navigate') {
            handleNavigation(event.data.target);
        }
    });
}

/**
 * 处理应用内导航
 */
function handleNavigation(target) {
    // 在实际应用中，这里会加载不同的页面
    // 在原型中，我们只是更改活动标签
    console.log(`Navigate to: ${target}`);
    
    // 如果有具体的导航逻辑，在这里实现
    // 例如，在index.html中，我们可能会切换显示哪个iframe
}

/**
 * 初始化其他交互效果
 */
function initInteractions() {
    // 添加卡片点击效果
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 添加列表项点击效果
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        if (!item.classList.contains('no-click')) {
            item.addEventListener('click', function() {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 150);
                
                // 获取列表项的数据属性，用于导航或其他操作
                const action = this.getAttribute('data-action');
                const id = this.getAttribute('data-id');
                
                if (action === 'view-contract') {
                    // 处理查看合同的操作
                    console.log(`View contract: ${id}`);
                    
                    // 在实际应用中，这里会跳转到合同详情页面
                    if (window.parent !== window) {
                        window.parent.postMessage({
                            action: 'navigate',
                            target: 'contract-detail',
                            id: id
                        }, '*');
                    }
                }
                // 可以添加其他操作类型的处理...
            });
        }
    });

    // 分段控制器交互
    const segments = document.querySelectorAll('.segment');
    segments.forEach(segment => {
        segment.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.segment').forEach(s => {
                s.classList.remove('active');
            });
            this.classList.add('active');
            
            // 处理分段控制器的切换逻辑
            const target = this.getAttribute('data-target');
            if (target) {
                document.querySelectorAll('.segment-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(target).style.display = 'block';
            }
        });
    });

    // 搜索框焦点效果
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.search-bar').style.boxShadow = '0 0 0 2px var(--primary-color)';
        });
        
        input.addEventListener('blur', function() {
            this.closest('.search-bar').style.boxShadow = '';
        });
    });
}

/**
 * 模拟合同签名功能
 */
function signContract() {
    const signatureCanvas = document.getElementById('signature-canvas');
    if (signatureCanvas) {
        const signatureData = signatureCanvas.toDataURL();
        console.log('签名已完成', signatureData);
        
        // 显示成功消息
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message fade-in';
        successMessage.innerHTML = '<i class="fas fa-check-circle"></i> 合同签署成功!';
        document.body.appendChild(successMessage);
        
        // 3秒后移除成功消息
        setTimeout(() => {
            successMessage.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        }, 3000);
        
        // 在实际应用中，这里会保存签名并更新合同状态
        setTimeout(() => {
            // 模拟导航回合同详情页
            if (window.parent !== window) {
                window.parent.postMessage({
                    action: 'navigate',
                    target: 'contract-detail'
                }, '*');
            }
        }, 3500);
    }
}

/**
 * 初始化签名画布
 */
function initSignatureCanvas() {
    const canvas = document.getElementById('signature-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let drawing = false;
    
    // 设置画布尺寸
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // 设置画笔样式
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    
    // 触摸事件处理
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    
    // 鼠标事件处理
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    
    function startDrawing(e) {
        drawing = true;
        const { x, y } = getCoordinates(e);
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function draw(e) {
        if (!drawing) return;
        const { x, y } = getCoordinates(e);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    function stopDrawing() {
        drawing = false;
    }
    
    function getCoordinates(e) {
        let x, y;
        if (e.type.includes('touch')) {
            const touch = e.touches[0];
            x = touch.clientX - canvas.getBoundingClientRect().left;
            y = touch.clientY - canvas.getBoundingClientRect().top;
        } else {
            x = e.offsetX;
            y = e.offsetY;
        }
        return { x, y };
    }
    
    // 清除按钮功能
    const clearButton = document.getElementById('clear-signature');
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }
}

// 在页面加载后初始化签名画布
window.addEventListener('load', function() {
    initSignatureCanvas();
    
    // 检查并初始化特定页面的功能
    if (document.querySelector('.signature-page')) {
        const signButton = document.getElementById('sign-contract-btn');
        if (signButton) {
            signButton.addEventListener('click', signContract);
        }
    }
});

// CSS样式，用于成功消息显示
const style = document.createElement('style');
style.textContent = `
    .success-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--success-color);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
    }
    
    .success-message i {
        margin-right: 8px;
    }
    
    .fade-out {
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }
`;
document.head.appendChild(style);
