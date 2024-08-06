document.addEventListener("DOMContentLoaded", () => {
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('Reset');

    changeButton.addEventListener('click', () => {
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;

        // Reset all blocks to transparent
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        // Change the color of the specified block
        if (blockId >= 1 && blockId <= 9) {
            const block = document.getElementById(blockId);
            if (block) {
                block.style.backgroundColor = color;
            }
        }
    });

    resetButton.addEventListener('click', () => {
        // Reset all blocks to transparent
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    });
});
