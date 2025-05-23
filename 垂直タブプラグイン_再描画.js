(function() {
  'use strict';
//
  console.log('[DEBUG] スクリプト起動');

  const fixUserSelectHeight = () => {
    console.log('[DEBUG] fixUserSelectHeight 実行');

    const zeroHeightElements = document.querySelectorAll('[style*="height: 0px"]');
    console.log(`[DEBUG] 高さ0pxの要素数: ${zeroHeightElements.length}`);

    zeroHeightElements.forEach((el, index) => {
      const className = el.className || '(クラスなし)';
      const innerText = el.innerText.trim().substring(0, 30);
      console.log(`[DEBUG] 要素 ${index + 1}: class=${className}, text=${innerText}`);

      if (
        el.className.includes('gaia') ||
        el.className.includes('kintone') ||
        el.className.includes('multipleselect-cybozu') ||  // ← ここを追加！
        el.innerHTML.includes('data-user-id')
      ) {
        console.log(`[DEBUG] → 該当要素の高さ補正を実施`);
        el.style.height = 'auto';
        el.style.maxHeight = '300px';
        el.style.overflow = 'auto';
      } else {
        console.log(`[DEBUG] → 対象外`);
      }
    });
  };

  document.addEventListener('click', function(e) {
    const tabButton = e.target.closest('button.MuiTab-root');
    if (tabButton) {
      const tabText = tabButton.innerText.trim();
      console.log(`[DEBUG] タブがクリックされました: ${tabText}`);
      setTimeout(fixUserSelectHeight, 200);
    }
  });
})();