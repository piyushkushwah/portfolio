export function scrollAnim(id, anim_id) {
    window.addEventListener('scroll', () => {
        let toggle = document.getElementById(id);
        this.offsetHeight = document.getElementById('skillsWrapper').offsetHeight - 150;
        // console.log(window.scrollY, document.getElementById('skillsWrapper').offsetHeight - 150);
        if (parseInt(window.scrollY) >= document.getElementById('skillsWrapper').offsetHeight - 150) {
            toggle.classList.add('do_anim');
        } else {
            if (window.scrollY === 0) {
                toggle.classList.remove('do_anim');
            }
        }
    });
}